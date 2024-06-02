let pwEl1 = document.getElementById("pwEl1");
let pwEl2 = document.getElementById("pwEl2");
const pw_length = 15;

const cps = () =>
  window.crypto.getRandomValues(new BigUint64Array(1))[0].toString(36);

function generatePassword() {
  const pw1 = cps();
  const pw2 = cps();
  printPassword(pw1, pw2);
}

function printPassword(pw1, pw2) {
  pwEl1.innerHTML = pw1;
  pwEl2.innerHTML = pw2;
}

function CopyToClipboard(containerid) {
  if (window.getSelection) {
    if (window.getSelection().empty) {
      // Chrome
      window.getSelection().empty();
    } else if (window.getSelection().removeAllRanges) {
      // Firefox
      window.getSelection().removeAllRanges();
    }
  } else if (document.selection) {
    // IE?
    document.selection.empty();
  }

  if (document.selection) {
    var range = document.body.createTextRange();
    range.moveToElementText(document.getElementById(containerid));
    range.select().createTextRange();
    document.execCommand("copy");
  } else if (window.getSelection) {
    var range = document.createRange();
    range.selectNode(document.getElementById(containerid));
    window.getSelection().addRange(range);
    document.execCommand("copy");
  }
}
