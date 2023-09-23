import {Database} from 'bun:sqlite'

const db = new Database("mydb", { create: true });

console.log(db)
const cats =['1 cat','2 cat']
//db.run("CREATE TABLE cats (info TEXT)");

// const query = db.query(`create table cats;`);
// query.run();
const insertCat = db.prepare("INSERT INTO cats (info) VALUES ($info)");
const insertCats = db.transaction((cats) => {
  for (const cat of cats) insertCat.run(cat);
});
insertCats(cats)



const query = db.prepare("SELECT * FROM cats");

console.log(query.all())
// db.serialize(() => {
//     db.run("CREATE TABLE lorem (info TEXT)");

//     const stmt = db.prepare("INSERT INTO lorem VALUES (?)");
//     for (let i = 0; i < 10; i++) {
//         stmt.run("Ipsum " + i);
//     }
//     stmt.finalize();

//     db.run("SELECT rowid AS id, info FROM lorem", (err, row) => {
//         console.log(row.id + ": " + row.info);
//     });
// });

db.close()