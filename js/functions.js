const setComponents = (typeComponents, fileName) => {
    let length = typeComponents.length;
    let components;

    for (let i = 0; i < length; i++) {
        components = typeComponents[i].children;

        switch(typeComponents[i].tagName) {
            case "replace":
                setDirective(fileName, components, getTemplateReplace);
                break;
            case "replaceIsolate":
                setDirective(fileName, components, getTemplateReplaceIsolate);
                break;
            case "normal":
                setDirective(fileName, components, getTemplate);
        }
    }
}

const setDirective = (fileName, components, getFunction) => {
    let length = components.length;

    for (let i = 0; i < length; i++) {
        let template = components[i].innerHTML;

        docTruyenOnline.directive(fileName + components[i].tagName, () => getFunction(template));
    }
}

const getTemplateReplace = component => {
    return {
        replace: true,
        template: component,
    };
}

const getTemplateReplaceIsolate = component => {
    return {
        replace: true,
        template: component,
        scope: {props: '=props'}
    };
}

const getTemplate = component => {
    return {template: component};
}

const propsListTypeNovels = rows => {
    for (let i = 0; i < rows.length; i++) {
        for (let j = 0; j < rows[i].length; j++) {
            propsNavList_(rows[i][j]);

            rows[i][j].cssIcon = "d-block fa fa-tags";
            rows[i][j].title =  rows[i][j].type.includes("Truyện") ?  rows[i][j].type : ("Truyện " +  rows[i][j].type);
        }
    }

    rows[8][1].title = "Review Truyện";
}

const propsArrange = rows => {
    for (let i = 0; i < rows.length; i++) {
        rows[i].forEach(propsNavList_);
    }

    rows[0][0].cssLink = "d-flex align-items-center text-hot";
    rows[3][0].colSpan = 2;
    rows[3][0].cssLink = "d-flex align-items-center justify-content-center text-hot";
}

const propsNavList_ = typeNovel => {
    typeNovel.cssTd = "item-sub-hover";
    typeNovel.colSpan = 1;
    typeNovel.cssLink = "d-flex align-items-center item";
    typeNovel.cssType = "d-inline-block pl-item";
}

const propsTypeNovels = rows => {
    let length = rows.length;

    for (let i = 0; i < length; i++) {
        rows[i].forEach(propsTypeNovel);
    }

    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
            rows[i][j].cssLink = "d-flex align-items-center text-hot";
            rows[i][j].cssIcon = "fa fa-diamond";
        }
    }
}

const propsTypeNovel = typeNovel => {
    typeNovel.cssTd = "";
    typeNovel.colSpan = 1;
    typeNovel.title = typeNovel.type;
    typeNovel.cssLink = "d-flex align-items-center text-dark";
    typeNovel.cssIcon = "fa fa-tags";
    typeNovel.cssType = "d-inline-block pl-item hover-t-decoration";
}

const requestGetSynchronized = (request, url) => {
    request.open("GET", url, false);
    request.send();

    return request.responseText;
}

const setsuggestedNovelsScope = () => {
    let sectionData = data_.suggestedNovels;
    let length = Math.ceil(sectionData.length/3);
    let carousels = new Array(length);

    for (let i = 0; i < length; i++) {
        carousels[i] = {cssCarousel: "carousel-item", novels: []};
    }

    length = sectionData.length;

    for (let i = 0; i < length; i++) {
        titleNovel_(sectionData[i]);
        carousels[Math.floor(i/3)].novels.push(sectionData[i]);
    }

    carousels[0].cssCarousel = "carousel-item active";
    scope_.suggestedNovels.carousels = carousels;
}

const setShowNovelsScope = (section, dataNotUpdate) => {
    data_[section].forEach(titleNovel_);
    scope_[section].novels = data_[section];

    if (dataNotUpdate != undefined) {
        scope_[section].sectionTitle = dataNotUpdate.sectionTitle;
        scope_[section].typeNovels = dataNotUpdate.typeNovels;
    }
}

const setUpdatedNovelsScope = () => {
    data_.updatedNovels.forEach(titleNovel_);
    scope_.updatedNovels.novels = data_.updatedNovels;
}

const titleNovel_ = novel => {
    novel.title = (novel.before !== "") ? (novel.before + " " + novel.name) : novel.name;
    novel.title = (novel.after !== "") ? (novel.title + " " + novel.after) : novel.title;
}

const setshortNovelsScope = section => {
    scope_.shortNovels.leftOfShortNovel = data_.leftOfShortNovel;
    setHorizontalDecriptionScope_(section, "rightOfShortNovels", "d-flex pb-short-novel");
}

const setreviewNovelsScope = section => {
    setHorizontalDecriptionScope_(section, "reviewNovels", "d-flex p-short-novel");
}

const setHorizontalDecriptionScope_ = (section, name, cssContainer) => {
    let dataHorizontal = data_[name];
    let length = dataHorizontal.length;

    for (let i = 0; i < length; i++) {
        dataHorizontal[i].cssContainer = cssContainer;
    }

    scope_[section].novels = dataHorizontal;
}

const setNovelsListScope = (section, dataNotUpdate) => {
    let novels = data_[section];
    let numberNovels = novels.length;
    let count = numberNovels.toString().length;
    let novel;

    for (let i = 0; i < numberNovels; i++) {
        novel = novels[i];
        novel.rank = (i + 1) + "";
        novel.rank = novel.rank.padStart(count, "0");
        novel.cssRank = "rank text-under-r-3";
    }

    novels[0].cssRank = "rank text-r-1";
    novels[1].cssRank = "rank text-r-2";
    novels[2].cssRank = "rank text-r-3";
    scope_[section].novels = novels;

    if (dataNotUpdate != undefined) {
        scope_[section].sectionTitle = dataNotUpdate;
    }
}

const setTrendNovelsInMonthScope = () => {
    scope_.trendNovelsInMonth.novles = data_.trendNovelsInMonth;
}

const requestData = () => {
    fetch("./data.json")
    .then(response => response.json())
    .then(json => {
        let updatedTime = json.lastUpdatedTime;
        data_ = json.data;

        for (let section in updatedTime) {
            if (updatedTime[section] != lastUpdatedTime_[section]) {
                setScope_[section](section);
                scope_[section].$digest();
            }
        }

        lastUpdatedTime_ = updatedTime;
        setTimeout(requestData, 5000);
    });
}