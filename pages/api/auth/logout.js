export default (req, res) => {
  const url = process.env.REDIRECT_URL;
  res.redirect(url);
};
