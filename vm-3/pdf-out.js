const PDFDocument = require("pdfkit");
const fs = require("fs");
const doc = new PDFDocument();

doc.pipe(fs.createWriteStream("output.pdf"));

doc.registerFont("Noto", "NotoSans-Regular.ttf");

// prettier-ignore
var tasks = [
    {"note":{"note":"This is a test note"}}, 
    {"note":{"note":"This is a test note"}}, 
    {"note":{"note":"This is a test note"}}, 
    {"note":{"note":"This is a test note"}}, 
    {"note":{"note":"This is a test note"}}, 
    {"note":{"note":"This is a test note"}}, 
    {"note":{"note":"This is a test note"}}, 
    {"note":{"note":"This is a test note"}}, 
];

doc
  .font("Noto")
  .fontSize(20)
  .text("Task List");

doc
  .font("Noto")
  .fontSize(12)
  .text(" ");

tasks.forEach(function(item, i) {
  doc
    .font("Noto")
    .fontSize(12)
    .text("□ " + item.note.note);
  doc
    .font("Noto")
    .fontSize(12)
    .text(" ");
});

// Finalize PDF file
doc.end();
