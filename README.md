### Libraries
- API: axios
- Router: react-router-dom
- State Management: @reduxjs/toolkit, react-redux
- UI component: react-bootstrap/marterial/mantine

### Folder structure
- src/
    - components/: 
        + Dùng để tạo các common component , VD: Button,Header,Sidebar,...
        + Thường là tạo các component thiên về UI, không chứa các logic của ứng dụng như call API,...

    - module/`module-name`/
        + Dùng để gom nhóm các component theo 1 chức năng or 1 page
        + Các component này thường sẽ chứa logic của ứng dụng như call API, redux,...

    - routes/
        + Dùng để định nghĩa các tác vụ liên quan đến router
    
    - services/
        + Dùng để chứa các setup phương thức gọi API (axios) và các hàm xử lý với API

    - hook/
        + Dùng để viết các cái custom hooks

    - utils/
        + Dùng để chứa các hàm tái sử dụng

    - store.js : setup redux store