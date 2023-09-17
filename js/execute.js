{
    let path = "./componentsHTML/";
    let files = ["headerComponents.html", "components.html", "contentComponents.html", "footerComponents.html"];
    let length = files.length;
    let text;
    let request = new XMLHttpRequest();
    let parserHTML = new DOMParser();
    let HTML;
    let root;

    for (let i = 0; i < length; i++) {
        text = requestGetSynchronized(request, path + files[i]);
        HTML = parserHTML.parseFromString(text, "text/xml");
        root = HTML.firstElementChild;

        setComponents(root.children, files[i].substring(0, files[i].length - 5));
    }
}

docTruyenOnline.run(["$rootScope", rootScope => {
    rootScope.cssTable_ = "position-absolute top-100 start-0 table table-bordered bg-white w-table";
}]);

docTruyenOnline.run(["$rootScope", rootScope => {
    rootScope.listOfTypeNovels = {
        cssIcon: "d-block fa fa-tags color-main-list",
        itemName: "Thể loại",
        list: {
            cssTable: rootScope.cssTable_, 
            rows: [
                [{type: "Tiên Hiệp"}, {type: "Kiếm Hiệp"}], [{type: "Ngôn Tình"}, {type: "Truyện Teen"}], 
                [{type: "Đô Thị"}, {type: "Quân Sự"}], [{type: "Lịch Sử"}, {type: "Xuyên Không"}], 
                [{type: "Truyện Ma"}, {type: "Trinh Thám"}], [{type: "Huyền Huyễn"}, {type: "Khoa Nguyễn"}], 
                [{type: "Dị Giới"}, {type: "Võng Du"}], [{type: "Truyện Ngắn"}, {type: "Truyện Cười"}], 
                [{type: "Tiểu Thuyết"}, {type: "Review"}]
            ]
        }
    };

    propsListTypeNovels(rootScope.listOfTypeNovels.list.rows);
}]);

docTruyenOnline.run(["$rootScope", rootScope => {
    rootScope.arrange = {
        cssIcon: "d-block fa fa-list color-main-list",
        itemName: "Sắp xếp",
        list: {
            cssTable: rootScope.cssTable_,
            rows: [
                [
                    {cssIcon: "d-block fa fa-diamond", title: "Truyện Dịch", type: "Truyện Dịch"}, 
                    {cssIcon: "d-block fa fa-refresh", title: "Truyện Mới Cập Nhật", type: "Mới Cập Nhật"}
                ], 
                [
                    {cssIcon: "d-block fa fa-cloud-upload", title: "Truyện Mới Đăng", type: "Mới Đăng"}, 
                    {cssIcon: "d-block fa fa-eye", title: "Truyện Đọc Nhiều", type: "Xem Nhiều"}
                ], 
                [
                    {cssIcon: "d-block fa fa-thumbs-o-up", title: "Truyện Được Yêu Thích", type: "Yêu Thích"}, 
                    {cssIcon: "d-block fa fa-signal", title: "Truyện Full", type: "Truyện Full"}
                ],
                [{cssIcon: "d-block fa fa-star", title: "Truyện Sáng Tác", type: "Thành Viên Sáng Tác"}]
            ]
        }
    };

    propsArrange(rootScope.arrange.list.rows);
}]);

docTruyenOnline.run(["$rootScope", rootScope => {
    rootScope.upLoadTitle = "Đăng truyện";
}]);

docTruyenOnline.run(["$rootScope", rootScope => {
    rootScope.updatedNovelsTitle = "TRUYỆN MỚI CẬP NHẬT";
}]);

docTruyenOnline.run(["$rootScope", rootScope => {
    rootScope.typeNovels = {
        cssTable: "table bg-white w-100",
        rows: [
            [{type: "Tiên Hiệp"}, {type: "Kiếm Hiệp"}], [{type: "Truyện Teen"}, {type: "Ngôn Tình"}], 
            [{type: "Đoản Văn"}, {type: "Đông Phương"}], [{type: "Gia Đấu"}, {type: "Nữ Cường"}], [{type: "Cung Đấu"}, {type: "Truyện Sủng"}],
            [{type: "Truyện Ngược"}, {type: "Linh Dị"}], [{type: "Thám Hiểm"}, {type: "Bách Hợp"}], [{type: "Hài Hước"}, {type: "Hiện Đại"}],
            [{type: "Việt Nam"}, {type: "Light Novel"}], [{type: "Nữ Phụ"}, {type: "Phương Tây"}], [{type: "Mạt Thế"}, {type: "Cổ Đại"}],
            [{type: "Điền Văn"}, {type: "Đồng Nhân"}], [{type: "Trọng Sinh"}, {type: "Dị Năng"}], [{type: "Huyền Huyễn"}, {type: "Dị Giới"}],
            [{type: "Võng Du"}, {type: "Quân Sự"}], [{type: "Khoa Học"}, {type: "Lịch Sử"}], [{type: "Truyện Khác"}, {type: "Đô Thị"}],
            [{type: "Khoa Huyễn"}, {type: "Xuyên Không"}], [{type: "Truyện Ma"}, {type: "Xuyên Nhanh"}], 
            [{type: "Quan Trường"}, {type: "Đam Mỹ"}], [{type: "Hệ Thống"}, {type: "Tiểu Thuyết"}], 
            [{type: "Truyện Cười"}, {type: "Truyện Ngắn"}], [{type: "Truyện Trinh Thám"}, {type: "Truyện Sắc"}]
        ]
    };

    propsTypeNovels(rootScope.typeNovels.rows);
}]);

docTruyenOnline.run(["$rootScope", rootScope => {
    rootScope.reviewNovelsTitle = "REVIEW TRUYỆN";
}]);

docTruyenOnline.run(["$rootScope", rootScope => {
    rootScope.highLighs = [
        {title: "đọc truyện online", marker: "đọc truyện"}, {title: "Truyện Tiên Hiệp", marker: "truyện tiên hiệp"}, 
        {title: "Truyện Kiếm Hiệp", marker: "truyện kiếm hiệp"}, {title: "Truyện Ngôn Tình", marker: "truyện ngôn tình"}, 
        {title: "Truyện Teen", marker: "truyện teen"}, {title: "Truyện Đô Thị", marker: "truyện đô thị"}, 
        {title: "Privacy Policy", marker: "Chính sách bảo mật"}, {title: "Terms", marker: "Điều khoản sử dụng"}, 
        {title: "Content Rules", marker: "Quy định về nội dung"}, {title: "DMCA Guidelines", marker: "Vấn đề bản quyền"}, 
        {title: "Privacy agreement", marker: "Thỏa thuận quyền riêng tư"}, {title: "https://dtruyen.com", marker: "DTruyen.Com"}
    ];
}]);

docTruyenOnline.run(["$rootScope", rootScope => {
    rootScope.types = ["Ngôn Tình", "Truyện Teen", "Tiên Hiệp", "Kiếm Hiệp", "Xuyên Không"];
}]);

{
    let request = new XMLHttpRequest();
    let text = requestGetSynchronized(request, "./data.json");
    let json = JSON.parse(text);

    lastUpdatedTime_ = json.lastUpdatedTime;
    data_ = json.data;

    for (let section in lastUpdatedTime_) {
        docTruyenOnline.controller(section, ["$scope", scope => {
            scope_[section] = scope;
            setScope_[section](section, dataNotUpdate_[section]);
        }]);
    }
}

setTimeout(requestData, 10000);