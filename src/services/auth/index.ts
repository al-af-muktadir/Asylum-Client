"use server";
export const recaptchaVerify = async (token: string) => {
  try {
    const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        secret: process.env.NEXT_PUBLIC_RECAPTCHA_SV_KEY!,
        response: token,
      }),
    });
    return res.json();
  } catch (err) {
    console.log(err);
  }
};
