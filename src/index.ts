import "./styles.css";
import Test from "./Test";

let tst: Test = new Test();
let foo: string = "This is a variable";

document.getElementById("app").innerHTML = `
<h1>${tst.someValue()}</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>`;
