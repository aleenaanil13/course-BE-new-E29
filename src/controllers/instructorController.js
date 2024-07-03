const singup = async (req, res) => {
  try {
    console.log(req.body);

    const { email, password, name } = req.body;

    const instructorrExist = await Instructor.findOne({ email });

    if (instructorrExist) {
      return res.send("Instructor is already exist");
    }

    const saltRounds = 10;
    const hashPassword = await bcrypt.hash(password, saltRounds);

    const newInstructor = new Instructor({
      name,
      email,
      hashPassword,
      role: "instructor",
    });

    const newInstructorCreated = await newInstructor.save();

    if (!newInstructorCreated) {
      return res.send("instructor is not created");
    }

    const token = adminToken(newInstructorCreated);

    res.cookie("token", token);
    res.json({ message: "signned in!", token });
  } catch (error) {
    console.log(error, "Something wrong");
  }
};

const singin = async (req, res) => {
  try {
    const body = req.body;
    const { email, password } = body;
    console.log(body);

    const instructor = await Instructor.findOne({ email });

    if (!instructor) {
      return res.send("instructor is not found");
    }

    const matchPassword = await bcrypt.compare(
      password,
      instructor.hashPassword
    );

    console.log(matchPassword, "matchpassword");
    if (!matchPassword) {
      return res.send("password is not match");
    }

    const token = adminToken(instructor);

    res.cookie("token", token);
    res.json({ message: "Logged in!", token });
  } catch (error) {
    console.error("Error", error);
    res.status(500).send("Internal Server Error");
  }
};

export default {
  singin,
  singup,
};
