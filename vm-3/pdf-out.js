const PDFDocument = require("pdfkit");
const fs = require("fs");
const axios = require("axios");
const doc = new PDFDocument();

doc.pipe(fs.createWriteStream("task-list.pdf"));

doc.registerFont("Noto", "NotoSans-Regular.ttf");
doc.registerFont("Box", "NotoSansTC-Regular.otf");

// ALSO NEED TO MAKE THE DATABASE BE PRE- POPULATED WITH TASKS (SEE ISSUE)
// Need some way to run print script from host machine without SSH? Maybe script that SSH's or something

async function getData(callback) {
  try {
    let res = await axios.get(`http://192.168.55.11:3000/notes`);
    if (res.status == 200) {
      console.log(res.status);
    }
    callback(returnData(res.data));
  } catch (err) {
    console.error(err);
  }
}

function returnData(data) {
  return data;
}

getData(function(a) {
  console.log(a);
  doc
    .font("Noto")
    .fontSize(20)
    .text("Task List");

  doc
    .font("Noto")
    .fontSize(12)
    .text(" ");

  a.forEach(function(item) {
    doc
      .font("Box")
      .text("▢ ", {
        continued: true
      })
      .font("Noto")
      .text(" " + item.note);

    doc
      .font("Noto")
      .fontSize(12)
      .text(" ");
  });

  // Finalize PDF file
  doc.end();
});
