const fs = require('fs');

const pagesToCreate = [
  { title: "Supported Grades", id: "grades.html" },
  { title: "Technical Training", id: "training.html" },
  { title: "Books and Library", id: "library.html" },
  { title: "Accounting", id: "accounting.html" },
  { title: "Mathematics", id: "mathematics.html" },
  { title: "Science", id: "science.html" },
  { title: "English", id: "english.html" },
  { title: "Computer", id: "computer.html" },
  { title: "Social", id: "social.html" }
];

const templateTop = `<!DOCTYPE html>
<html lang="en">
<head>
	<meta http-equiv="content-type" content="text/html;charset=utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, maximum-scale=1, initial-scale=1, user-scalable=0">
	<title>ABC School - {PAGE_TITLE}</title>
	<link rel="shortcut icon" href="images/favicon.html" type="image/x-icon">
	<link rel="stylesheet" href="css/bootstrap.min.css">
	<link rel="stylesheet" href="css/style.css">
	<link rel="stylesheet" href="css/responsive.css">
	<link id="changeable-colors" rel="stylesheet" href="css/colors/orange.css">
	<script src="js/modernizer.js"></script>
	<meta charset="UTF-8">
	<link rel="stylesheet" href="assets/css/style.css">
	<script src="jquery.js"></script>
</head>
<body>
	<nav id='menu' class="navnew">
		<input type='checkbox' id='responsive-menu' onclick='updatemenu()'><label></label>
		<ul>
			<li><img src="images/logo-1.png" class="logo2"></li>
			<li><a href='index.html'>Home</a></li>
			<li><a href='index.html#abt'>Services</a></li>
			<li><a href='index.html#cont'>Contact Us</a></li>
			<li><a href='gallery.html'>Gallery</a></li>
			<li><a href='index.html#sub'>Subjects</a></li>
		</ul>
	</nav>
	
	<div class="pad-top-100 pad-bottom-100" style="padding-top: 150px; min-height: 50vh; display: flex; align-items: center; justify-content: center; text-align: center; color: white;">
		<div class="container">
			<h2>{PAGE_TITLE}</h2>
			<p style="margin-top: 20px;">Content for this page is coming soon. You can start building out the details for {PAGE_TITLE} here.</p>
			<a href="index.html" class="bt" style="margin-top: 30px; display: inline-block;">Back to Home</a>
		</div>
	</div>

	<!-- Footers -->
	<footer class="w3l-footers-14">
		<div id="footers14-block">
			<div class="wrapper">
				<div class="footers14-top d-flex">
					<ul class="footer14-nav">
						<li><a href="index.html">Home</a></li>
						<li><a href="index.html#abt">Services</a></li>
						<li><a href="gallery.html">Gallery</a></li>
						<li><a href="index.html#cont">Contact</a></li>
						<li><a href="index.html#sub">Subjects</a></li>
					</ul>
				</div>
				<div class="footers14-bottom d-flex">
					<div class="copyright">
						<p>© 2022. All Rights Reserved.</p>
					</div>
				</div>
			</div>
		</div>
	</footer>
</body>
</html>`;

pagesToCreate.forEach(page => {
  const content = templateTop.replace(/{PAGE_TITLE}/g, page.title);
  fs.writeFileSync(page.id, content, 'utf8');
  console.log('Created ' + page.id);
});
