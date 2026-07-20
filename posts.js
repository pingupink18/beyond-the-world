// ====== 標籤群組設定 ======
// 這裡先分兩組，妳可以自己再加新的群組（例如「地圖」「難度」）
// 每篇貼文的 tags 只能填這裡出現過的標籤名稱
const TAG_GROUPS = {
  "內容類型": ["主線劇情", "角色攻略", "裝備配置", "副本攻略", "彩蛋考據"],
  "角色": ["敖尹", "阿律"]
};

// ====== 貼文資料 ======
// 新增貼文：複製一組 { ... }，貼在陣列最後面，記得前一組結尾要加逗號
const posts = [
  {
    id: 1,
    title: "第三章 隱藏劇情觸發條件整理",
    excerpt: "整理各分支選項與觸發前置任務的對應關係，附選項截圖。",
    image: "images/example1.jpg",
    link: "https://example.com/original-post-1",
    tags: ["主線劇情", "彩蛋考據"]
  },
  {
    id: 2,
    title: "敖尹 最佳裝備搭配一覽",
    excerpt: "主詞條與套裝效果推薦，附輸出模擬數據。",
    image: "images/example2.jpg",
    link: "https://example.com/original-post-2",
    tags: ["角色攻略", "裝備配置", "敖尹"]
  }
];