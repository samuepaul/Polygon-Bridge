const fs = require('fs');
const path = require('path');

const metadata = path.join(__dirname, 'metadata');
if (!fs.existsSync(metadata)) {
    fs.mkdirSync(metadata);
}

console.log(__dirname);

for (let i = 1; i <= 5; i++) {
    const json = {
        name: `Dogara NFT #${i}`,
        description: `Image of the Ancient African Black Warrior #${i}`,
        image: `https://gateway.pinata.cloud/ipfs/QmcirT3gYASNLtixuudPAsq9Udpcv4xzLzqmxaNGuDwyme/pinata${i}.jpg`
    };

    fs.writeFileSync(path.join(metadata, String(i)), JSON.stringify(json));
}
console.log("metadata successfully generated")