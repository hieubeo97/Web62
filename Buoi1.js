/*

    Scope:
        - global : các biến đc khai báo với var, let và const
        - function : các biến đc xác định bên trong hàm ko thể hiện thị bên ngoài hàm. các biến đc khai báo với var,let và const giống nhau khi đc khai báo trong một hàm 
        - block scope: các biến đc khai báo bên trong khối {} ko thể đc truy cập từ bên ngoài

    1. Sự khác biệt nhé giữa let, const và var
        -let : sử dụng để khai báo các biến có thể gán lại đc
        -const : sử dụng để khai báo các biến không thể gán lại đc 
        * scope (Phạm vị)
            var -> global 
            const, let: function, block

        * assignment
            const: không thể re-assign
            let và var là có thể

        * hoisting
            var có thể sử dụng trước khi khai báo 
            let, const : ko đc hỗ trợ 
    
    2. es6
        - map: sử dụng biến đổi các phần tử trong mảng theo 1 công thức nhất định mà ko thay đổi giá trị của mang ban đầu
        - filter : lọc các phần tử trong mảng theo 1 điều kiện nhất định mà ko làm thay đổi giá trị của mang ban đầu 
        - reduce : thực thi 1 function nhất định cho tất cả các phần tử của mảng với 1 giá trị tịnh tiến và trả lại 1 giá trị duy nhất 
        - some :  trả về true nếu ít nhất 1 phần tử trong mảng đang gọi thỏa mãn chức năng kiểm tra đc cung cấp 
        - every : trả về true nếu mọi phần tử trong mảng đang gọi đều thỏa mãn chức năng kiểm tra
        - find : trả về già trị của phần tử đầu tiên trong mảng thỏa mãn chức năng kiểm tra được cung cấp hoặc ko xác định nếu ko tìm thấy phần tử thích hợp
        - findIndex : trả về chỉ mục của phần tử dầu tiên trong mảng thỏa mãn chức năng ktra đc cung cấp hoặc -1 nếu ko tìm thấy phần tử thích hợp
        - for with index (for(let i = 0; i < nums.lentgh ; i++))  : 
        - for in : lặp lại trên tất cả các thuộc tính chuỗi có thể đếm đc của 1 đối tượng, bao gồm cả các thuộc tính có thể liệt kê đc kế thừa
        - for of : thực thi 1 vòng lặp hoặt động trên 1 chuỗi các giá trị có nguồn gốc từ 1 đối tượng có thể lặp lại
        - for each :gọi 1 hàm cho từng phân tử trong mảng 
    
    3. Spread operator (...) : là 1 toán tử giúp chúng ta có thể trải phẳng các phần tử của 1 đối tượng tập hợp (arry,object,set)
    4. String template (literals string)    
    5. Arrow function
        - Có bao nhiêu loại function : 17
        - Sự khác biệt giữa các loại function :
        - Tại sao ES6 arrow function  const getSum = (nums) => {} (bind, call, this)

    6. Destructuring
        - Object destructuring : hoạt động theo tên của trường dữ liệu
        - Array destructuring : hoạt độngt heo vị trí trong arry của phần tử 

    7. Promise: cách tự tạo 1 cái promise, mỗi cái promise có state, cách handle promise => async/await, event-loop
    8. Class 
*/
