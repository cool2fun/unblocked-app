// sitemap-generator.js
const fs = require('fs');
const path = require('path');

// Tạo một hàm để theo dõi thay đổi của file games.js
function watchGamesFile() {
    const gamesPath = path.join(__dirname, 'games.js');
    
    // Hàm để đọc nội dung games.js và trích xuất mảng games
    function extractGamesArray() {
        const content = fs.readFileSync(gamesPath, 'utf8');
        // Tìm và trích xuất mảng games từ nội dung file
        const gamesMatch = content.match(/const\s+games\s*=\s*(\[[\s\S]*?\]);/);
        if (gamesMatch) {
            // Chuyển đổi string thành array object
            return eval(gamesMatch[1]);
        }
        return [];
    }

    function generateSitemap() {
        const games = extractGamesArray();
        const domain = 'https://cool2fun.github.io';
        
        let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
        xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
        
        // Thêm trang chủ
        xml += `  <url>
    <loc>${domain}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>\n`;

        // Thêm các trang game
        games.forEach(game => {
            const url = `${domain}${game.link}`;
            xml += `  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>\n`;
        });

        // Thêm các trang category
        const categories = new Set();
        games.forEach(game => {
            game.category.split(',').forEach(cat => categories.add(cat.trim()));
        });

        categories.forEach(category => {
            const url = `${domain}/category?category=${encodeURIComponent(category)}`;
            xml += `  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>\n`;
        });

        xml += '</urlset>';
        return xml;
    }

    // Lưu sitemap
    function saveSitemap() {
        const sitemap = generateSitemap();
        fs.writeFileSync('sitemap.xml', sitemap);
        console.log('Sitemap updated at:', new Date().toLocaleString());
    }

    // Theo dõi thay đổi của file games.js
    fs.watch(gamesPath, (eventType) => {
        if (eventType === 'change') {
            console.log('Games file changed, updating sitemap...');
            saveSitemap();
        }
    });

    // Tạo sitemap lần đầu
    saveSitemap();
    console.log('Watching games.js for changes...');
}

// Chạy script
watchGamesFile();