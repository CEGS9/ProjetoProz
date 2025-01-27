const styleSheet = document.createElement('style');
document.head.appendChild(styleSheet);

const cssRules = `
* { 
    margin: 0; 
    padding: 0; 
    font-size: 17px; 
    font-size: 93%; 
}

header { background-color: #009CA6;}
li { display: inline; margin: 0px; }
nav { text-align: center; display: flex; justify-content: space-between; align-items: center; margin-right: 400px; margin-left: 100px;}
.ulheader { display: flex; list-style: none; color: rgb(250, 250, 250); gap: 50px; margin-right: 20px; align-items: center;}
a { text-decoration: none; color: #fff;}
.button { background-color: #F9BB1E; font-size: 18px; border-radius: 5px; height: 40px; width: 70px; font-weight: 600;}
body { font-size: 1.6rem; font-family: 'inter', sans-serif; font-weight: 600; background-image: url(../images/fundopp.png);}

@media (max-width: 1024px) {
    nav { flex-direction: column; margin-right: 20px; margin-left: 20px;}
    .ulheader { flex-direction: column; gap: 20px;}
    .button { width: auto; padding: 10px;}
    .quem { width: auto; margin-left: 0;}
    .missao, .visao, .valores { width: 90%; margin: auto;}
    footer section { flex-direction: column; gap: 20px; } 
}

@media (max-width: 768px) {
    .ulheader { gap: 10px; }
    .quem { font-size: 14px; padding: 10px; }
    .button { font-size: 16px; padding: 5px; }
    .missao, .visao, .valores { font-size: 14px;}
    footer section { font-size: 14px;} 
}

@media (max-width: 480px) { 
    h1, h2, h3, h4 { font-size: 120%;}
    nav { flex-direction: column; margin: 10px;}
    .ulheader { flex-direction: column; gap: 5px; }
    .button { font-size: 14px; height: auto; padding: 5px;}
    .quem, .missao, .visao, .valores { font-size: 12px; padding: 5px; } 
}
`;

styleSheet.innerHTML = cssRules;