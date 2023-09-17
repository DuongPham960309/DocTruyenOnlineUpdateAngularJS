const docTruyenOnline = angular.module("docTruyenOnline", []);

let lastUpdatedTime_;
let data_;

const scope_ = {};
const setScope_ = {
    suggestedNovels: setsuggestedNovelsScope, selectedTranslationNovels: setShowNovelsScope, updatedNovels: setUpdatedNovelsScope, 
    fullNovels: setShowNovelsScope, shortNovels: setshortNovelsScope, reviewNovels: setreviewNovelsScope, topGoodNovels: setNovelsListScope, 
    newUpdateNovels: setNovelsListScope, trendNovelsInMonth: setTrendNovelsInMonthScope
};
const dataNotUpdate_ = {
    selectedTranslationNovels: {sectionTitle: "TRUYỆN DỊCH CHỌN LỌC", typeNovels: false}, 
    fullNovels: {sectionTitle: "TRUYỆN FULL", typeNovels: true}, topGoodNovels: "TOP TRUYỆN HAY", newUpdateNovels: "TRUYỆN MỚI ĐĂNG"
};