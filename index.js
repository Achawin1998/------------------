const button = document.querySelector('button')
const result = document.getElementById('result')

button.addEventListener('click' , ()=>{
    const date1 = document.getElementById('date1').value
    const date2 = document.getElementById('date2').value
    // console.log(date1);
    // console.log(date2);

    const startDate = new Date(date1) // ทำเป็น object ถึงจะคำนวนได้ ปกติได้ค่าเป็น string
    const endDate = new Date(date2)

    // คำนวณผลต่าง
    const timeDif = Math.abs(endDate - startDate) // หน่วยเป็น millisecond
    // Math.abs นำเครื่องหมายลบออกไป

    console.log(timeDif);
    const day = Math.round(timeDif / (1000*60*60*24)) // ปัดเศษ + ทำให้เป็น ชม
    if (!day){
        alert('Please fill the date on calender')
    }else{
        result.innerText= "ห่างวันทั้งหมด " + day + " วัน"

    }
    
})