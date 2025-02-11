# Build Grid System

Các bước để xây dựng hệ thống lưới (Grid System) để chia Layout nhanh;

- **Bước 01: Xác định kích thước Grid System**: Kích thước của Grid System có thể được xác định dựa trên kích thước của màn hình thiết bị mà chúng ta muốn trang Web hiện thị đẹp mắt.
- **Bước 02: Tạo các hàng và cột trong Grid System**: Số lượng hàng và cột trong grid system có thể được xác định dựa trên nhu cầu thiết kế của chúng ta. Thường thì chúng ta sẽ có 12 cột trong grid system. Tuy nhiên 12 cột có một điểm yếu khi chia 5 cột và 7 cột, nên chúng ta có thể sử dụng 16 cột hoặc 24 cột thay vì 12 cột.
- **Bước 03: Sử dụng các hàng và cột để sắp xếp các phần tử trên trang Web**: Khi sắp xếp các phần tử, chúng ta cần đảm bảo rằng các phần tử được sắp xếp một cách hợp lý và dễ nhìn.

# Quy ước đặt tên Class khi Responsive

- Less 576px => .col-{number}
- Greater or Equal 576px => .col-sm-{number}
- Greter or Equal 768px => .col-md-{number}
- Greater or Equal 992px => .col-lg-{number}
- Greater or Equal 1200px => .col-xl-{number}
- Greater 1200px => .col-xxl-{number}
