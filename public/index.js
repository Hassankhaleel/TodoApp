
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
import {
    getDatabase,
    ref,
    set,
    push,
    onValue,

} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCwl4MZf8ZZARZBW46_4il7KC-tIsT6ND4",
    authDomain: "indextodofirebasedatabase.firebaseapp.com",
    projectId: "indextodofirebasedatabase",
    storageBucket: "indextodofirebasedatabase.appspot.com",
    messagingSenderId: "748320247993",
    appId: "1:748320247993:web:5ac0dff94b3d5e1d120b68",
    measurementId: "G-WGJY2G159H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase();




let ul = document.getElementById("ul_list")
window.addTask = function () {
    let input_Text = document.getElementById("input")
    // let li = document.createElement("li")
    // let li_value = document.createTextNode(input_Text.value)



    // li.appendChild(li_value);
    // ul_list.appendChild(li);
    // console.log(li.innerHTML);

    var idref = ref(database, "todos/");
    var iD = push(idref).key;


    var refe = ref(database, `todos/${iD}/`);
    var obj = {
        todos: input_Text.value,
        id: iD,
    };
    set(refe, obj);
    console.log(obj.id);







    //its wil be clear input after addign task------
    input_Text.value = ""
    //  --------------------------------------


}


function getTodos() {
    var refe = ref(database, "todos/");
    onValue(refe, function (data) {
        // console.log(data);
        var dataObj = data.val()
        console.log(dataObj);
        var dataList = Object.values(dataObj)
        console.log(dataList[0].id);
        renderList(dataList)
    })

}
getTodos();

window.dllt_li = function () {
    var dataLis = Object.values(dataObj).remove()
    console.log(dataLis);
}


function renderList(dataArry) {
    ul.innerHTML = "";
    for (var i = 0; i < dataArry.length; i++)
        ul.innerHTML += ` <li>${dataArry[i].todos}
  <div class="btn_wrapper" >
                            <i>
                                <i class="fa-solid fa-delete-left" onclick="dlltli('${dataArry[i].id}')"  ></i>
                            </i >


                            <i id="checkbox_css">
                                <input type="checkbox">
                            </i>


                        </div >


        </li > `

}


window.dlltli = function (e) {
    // var dataList = Object.values(dataObj)
    // console.log(dataList);
    // var refe = ref(database, `todos/${dataList[0].id}`);
    // console.log(refe);
    console.log(event.target.parentElement.parentElement.parentElement.remove());

}
// window.dllt_li = function (e) {
//     // console.log(ul_list);
// }





















window.dltALL = function () {
    let dltbtn = document.getElementById("ul_list")
    dltbtn.innerHTML = ""


}




