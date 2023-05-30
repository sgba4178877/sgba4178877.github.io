<template>
    <div>
        <head>
          <meta charset="UTF-8">
          <title>香菸及檳榔價格查詢</title>
          <link rel="stylesheet" href="stylesheets/style.css">
        </head>

        <div id="movies" class="filter-form">
            <div class="filter-container filter-date">
                <label for="date">日期(Ex: 112/3):</label>
                <input type="text" id="date" name="date">
            </div>
            <div class="filter-container filter-item">
                <label for="item">商品名稱:</label>
                <input type="text" id="item" name="item">
            </div>
            <div class="filter-container filter-cpi">
                <label for="cpi">物價:</label>
                <input type="text" id="cpi" name="cpi">
            </div>
            <button type="submit" id="filter-btn">提交</button>
        </div>

        <div class="container">
            <button id="showdata">顯示資料</button>
            <div class="wrap">
                <table id="table"></table>
            </div>
        </div>
    </div>>
</template>


<script>
    const btn = document.getElementById('showdata');
    const url = "http://localhost:3000/api"; // 資料傳送到的 URL
    btn.addEventListener('click', handleSubmit);

    document.querySelector('#filter-btn')
        .addEventListener('click', async () => {
            try {
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        date: document.querySelector('#date').value,
                        item: document.querySelector('#item').value,
                        cpi: document.querySelector('#cpi').value,
                    }),
                });
                const data = await response.json();
                console.log("成功", data);

                let table = document.createElement('table');
                let thead = document.createElement('thead');
                let tbody = document.createElement('tbody');
                let tr = document.createElement('tr');
                let th1 = document.createElement('th');
                let th2 = document.createElement('th');
                let th3 = document.createElement('th');
                let th4 = document.createElement('th');
                let th5 = document.createElement('th');
                th1.innerHTML = "id";
                th2.innerHTML = "year";
                th3.innerHTML = "month";
                th4.innerHTML = "item";
                th5.innerHTML = "cpi";
                tr.appendChild(th1);
                tr.appendChild(th2);
                tr.appendChild(th3);
                tr.appendChild(th4);
                tr.appendChild(th5);
                thead.appendChild(tr);
                table.appendChild(thead);
                for (let i = 0; i < data.length; i++) {
                    let tr = document.createElement('tr');
                    let td1 = document.createElement('td');
                    let td2 = document.createElement('td');
                    let td3 = document.createElement('td');
                    let td4 = document.createElement('td');
                    let td5 = document.createElement('td');
                    td1.innerHTML = data[i].id;
                    td2.innerHTML = data[i].year;
                    td3.innerHTML = data[i].month;
                    td4.innerHTML = data[i].item;
                    td5.innerHTML = data[i].cpi;
                    tr.appendChild(td1);
                    tr.appendChild(td2);
                    tr.appendChild(td3);
                    tr.appendChild(td4);
                    tr.appendChild(td5);
                    tbody.appendChild(tr);
                }
                table.appendChild(tbody);
                document.getElementById('table').replaceChildren(table);
            } catch (error) {
                // 在這裡處理錯誤，例如顯示錯誤訊息或者回滾操作
                console.log("錯誤", error);
            }
        });


    async function handleSubmit() {
        try {
            const response = await fetch(url, {
                method: 'GET',
            });
            const data = await response.json();
            // 在這裡處理回應資料，例如顯示成功訊息或更新頁面內容
            console.log("成功", data);

            // 將回傳的資料 用 table 顯示
            let table = document.createElement('table');
            let thead = document.createElement('thead');
            let tbody = document.createElement('tbody');
            let tr = document.createElement('tr');
            let th1 = document.createElement('th');
            let th2 = document.createElement('th');
            let th3 = document.createElement('th');
            let th4 = document.createElement('th');
            let th5 = document.createElement('th');
            th1.innerHTML = "id";
            th2.innerHTML = "year";
            th3.innerHTML = "month";
            th4.innerHTML = "item";
            th5.innerHTML = "cpi";
            tr.appendChild(th1);
            tr.appendChild(th2);
            tr.appendChild(th3);
            tr.appendChild(th4);
            tr.appendChild(th5);
            thead.appendChild(tr);
            table.appendChild(thead);
            for (let i = 0; i < data.length; i++) {
                let tr = document.createElement('tr');
                let td1 = document.createElement('td');
                let td2 = document.createElement('td');
                let td3 = document.createElement('td');
                let td4 = document.createElement('td');
                let td5 = document.createElement('td');
                td1.innerHTML = data[i].id;
                td2.innerHTML = data[i].year;
                td3.innerHTML = data[i].month;
                td4.innerHTML = data[i].item;
                td5.innerHTML = data[i].cpi;
                tr.appendChild(td1);
                tr.appendChild(td2);
                tr.appendChild(td3);
                tr.appendChild(td4);
                tr.appendChild(td5);
                tbody.appendChild(tr);
            }
            table.appendChild(tbody);
            document.getElementById('table').replaceChildren(table);

        } catch (error) {
            // 在這裡處理錯誤，例如顯示錯誤訊息或者回滾操作
            console.log("錯誤", error);
        }
    }

</script>

<style>
body {
    padding: 50px;
    font: 14px "Lucida Grande", Helvetica, Arial, sans-serif;
}

a {
    color: #00B7FF;
}

.wrap{
    overflow:hidden;
    border-radius:10px 10px 0px 0px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.35);
}

table{
    font-family: 'Oswald', sans-serif;
    border-collapse:collapse;
}

th{
    background-color:#009879;
    color:#ffffff;
    width:25vw;
    height:75px;
}

td{
    background-color:#ffffff;
    width:25vw;
    height:50px;
    text-align:center;
}

tr{
    border-bottom: 1px solid #dddddd;
}

tr:last-of-type{
    border-bottom: 2px solid #009879;
}

tr:nth-of-type(even) td{
    background-color:#f3f3f3;
}

.filter-form {
    display: flex;
    align-items: center;
    justify-content: center;
}

.filter-container {
    width: 25%;
}

.filter-container input {
    border:2px solid #aaa;
    border-radius:4px;
}

button {
    cursor: pointer;
    background: #009879;
    color: #ffffff;
    padding: 5px 10px;
    border: 0;
    border-radius: 10px;
}

button#showdata {
    margin: 20px;
}

.container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
</style>