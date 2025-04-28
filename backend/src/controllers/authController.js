import asyncHandler from "express-async-handler";

// user signup controller
export const userSignup = asyncHandler(async (req, res) => {
  const { userName, email, password } = req.body;
  const checkUser = await User.findOne({ email });
  if (checkUser)
    return res.json({
      success: false,
      message: "User Already exists with the same email! Please try again",
    });

  const hashPassword = await bcrypt.hash(password, 12);
  const newUser = new User({
    userName,
    email,
    password: hashPassword,
  });

  await newUser.save();
  res.status(200).json({
    success: true,
    message: "Registration successful",
  });
});
