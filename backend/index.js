const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const Report = require("./Models/ReportModel");
const EmployeeData = require("./Models/EmployeeModel");
const twilio = require("twilio");
const bodyParser = require("body-parser");
const Post = require("./Models/PostModel");
const requestIp = require("request-ip");
const CollegeSupport = require("./Models/CollegeSupportModel");
const sgMail = require("@sendgrid/mail");

dotenv.config();

const app = express();
const URI = process.env.MONGO_URI;

// Twilio setup
const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

//sgMail setup
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.use(express.json());
app.use(cors());
app.use(cors());
app.use(bodyParser.json());
app.set("trust proxy", true);
app.use(requestIp.mw());

mongoose
  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(process.env.PORT || 3001, () => {
      console.log(`Server running on port ${process.env.PORT || 3001}`);
    });
  })
  .catch((error) => {
    console.error(error);
  });

app.post("/report", async (req, res) => {
  try {
    const {
      title,
      placeOfIncident,
      image,
      date,
      time,
      description,
      seriousness,
    } = req.body;

    const newReport = new Report({
      title,
      placeOfIncident,
      image,
      date,
      time,
      description,
      seriousness,
    });

    const savedReport = await newReport.save();

    const messageContent = `
      🚨 *New Incident Report in College* 🚨

      *Incident Details:*
      - *Title:* ${title}
      - *Place:* ${placeOfIncident}
      - *Date:* ${date}
      - *Time:* ${time}

      *Description:*
      ${description}

      *Severity:* ${seriousness}

      🔴 *Urgent Action Required! Respond promptly to address the situation.* 🔴
    `;

    const employees = await EmployeeData.find({}, "mobile");
    const phoneNumbers = employees.map((employee) => employee.mobile);

    for (const phoneNumber of phoneNumbers) {
      await client.messages.create({
        body: messageContent,
        from: "whatsapp:+14155238886",
        to: `whatsapp:${phoneNumber}`,
      });
    }

    res.status(201).json(savedReport);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message, error: error });
  }
});

app.post("/employee", async (req, res) => {
  try {
    const { name, employeeId, todayLocation, mobile, email, post } = req.body;

    const newEmployeeData = new EmployeeData({
      name,
      employeeId,
      todayLocation,
      mobile,
      email,
      post,
    });

    const savedEmployeeData = await newEmployeeData.save();
    res.status(201).json(savedEmployeeData);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message, error: error });
  }
});

app.get("/api/reportsPerDay", async (req, res) => {
  try {
    console.log("logged here");
    console.log(req.clientIp);
    const reportsPerDay = await Report.aggregate([
      {
        $group: {
          _id: {
            $toDate: {
              $concat: [
                { $substr: ["$date", 0, 4] },
                "-",
                { $substr: ["$date", 5, 2] },
                "-",
                { $substr: ["$date", 8, 2] },
              ],
            },
          },
          count: { $sum: 1 },
        },
      },
      {
        $sort: { _id: 1 },
      },
      {
        $limit: 10,
      },
    ]);

    const formattedData = reportsPerDay.map((entry) => ({
      date: entry._id.toISOString().split("T")[0],
      count: entry.count,
    }));

    res.json(formattedData);
  } catch (error) {
    console.error("Error fetching reports per day:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Fetch all reports
app.get("/api/totalreports", async (req, res) => {
  try {
    const allReports = await Report.find();
    res.json(allReports);
  } catch (error) {
    console.error("Error fetching all reports:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Fetch all registered employees
app.get("/api/registeredemployees", async (req, res) => {
  try {
    const registeredEmployees = await EmployeeData.find({});
    res.json(registeredEmployees);
  } catch (error) {
    console.error("Error fetching registered employees:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Update verification status for an employee
app.put("/api/verifyEmployee/:id", async (req, res) => {
  const { id } = req.params;
  const { verified } = req.body;

  try {
    const updatedEmployee = await EmployeeData.findByIdAndUpdate(
      id,
      { verified },
      { new: true }
    );

    res.json(updatedEmployee);
  } catch (error) {
    console.error("Error updating employee verification status:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = app;

//sg setup here

app.post("/api/send-email", async (req, res) => {
  try {
    const { to, subject, text, html } = req.body;

    const msg = {
      to,
      from: "rizul.thakur1@gmail.com", // Set your SendGrid verified sender email here
      subject,
      text,
      html,
    };

    await sgMail.send(msg);

    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.put("/api/resolveReport/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const updatedReport = await Report.findByIdAndUpdate(
      id,
      { resolved: true },
      { new: true }
    );

    if (!updatedReport) {
      return res.status(404).json({ error: "Report not found" });
    }

    res.json(updatedReport);
  } catch (error) {
    console.error("Error resolving report:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

///number of reports

app.get("/api/totalresolvedreports", async (req, res) => {
  try {
    const resolvedReports = await Report.find({ resolved: true });
    res.json(resolvedReports);
  } catch (error) {
    console.error("Error fetching resolved reports:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/api/totalpendingreports", async (req, res) => {
  try {
    const pendingReports = await Report.find({ resolved: false });
    res.json(pendingReports);
  } catch (error) {
    console.error("Error fetching pending reports:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Add these routes to your existing Express app
app.get("/api/posts", async (req, res) => {
  try {
    const posts = await Post.find()
      .sort({ createdAt: -1 })
      .populate("comments");
    res.json(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/api/posts", async (req, res) => {
  try {
    const { text } = req.body;
    const newPost = new Post({ text });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(400).json({ error: "Bad Request" });
  }
});

// Add these routes to your existing Express app
app.put("/api/posts/:id/like", async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(
      req.params.id,
      { $inc: { likes: 1 } },
      { new: true }
    );
    res.json(post);
  } catch (error) {
    console.error("Error liking post:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/api/posts/:id/comment", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    post.comments.push({ text: req.body.text });
    await post.save();
    res.json(post);
  } catch (error) {
    console.error("Error commenting on post:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


app.post("/api/college-support", async (req, res) => {
  try {
    const formData = req.body;
    const newSubmission = await CollegeSupport.create(formData);
    res.json(newSubmission);
  } catch (error) {
    console.error("Error submitting form:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


// Endpoint to get student support details
app.get("/api/student-support", async (req, res) => {
  try {
    const studentDetails = await CollegeSupport.find();
    res.json(studentDetails);
  } catch (error) {
    console.error("Error fetching student details:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});