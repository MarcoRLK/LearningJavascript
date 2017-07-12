var panels = document.getElementsByClassName('panel-body');
for (var aux = 0; aux < panels.length; aux++) {
  panels[aux].addEventListener('mouseover', shake);
  panels[aux].addEventListener('mouseleave', freeze);
}

function shake() {
  panel = this.parentNode;
  panel.className = "panel-jump";
}

function freeze() {
  panel = this.parentNode;
  panel.className = "panel";
}
