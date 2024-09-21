//select php html elements
function rotationImgSens(id, incr, sens) {
    var img = document.getElementById(id);
    // changement de la regExp pour récupérer le signe
    // on met ||[0) pour le 1st passage
    var t = img.style.transform.match(/(\+?\-?\d+)/g) || [0];
    var val = ((t[0] * 1 + (incr * sens)));
    rotationImgId(id, val);
  }
   
  function rotationImgId(id, val) {
    var img = document.getElementById(id);
    // application de la rotation
    img.style.WebkitTransform = 'rotate(' + val + 'deg)'; // Chrome - safari
    img.style.MozTransform = 'rotate(' + val + 'deg)'; // Firefox
    img.style.MsTransform = 'rotate(' + val + 'deg)'; // Internet Explorer > 9
    img.style.Otransform = 'rotate(' + val + 'deg)'; // Opera
    img.style.transform = 'rotate(' + val + 'deg)'; // all
    document.getElementById('rotateImgNbre').value = val;
    document.getElementById('rotateImgRange').value = val % 360;
  }