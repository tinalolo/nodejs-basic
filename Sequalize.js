const { User } = require('./models');

// 新增一筆資料
User.create({
  name: 'John',
  age: 25,
  email: 'john@example.com'
}).then(user => {
  console.log(user.toJSON());
});

// 更新資料
// User.update({ age: 26 }, { where: { name: 'John' } }).then(() => {
//   console.log('Updated');
// });

// 刪除資料
// User.destroy({ where: { name: 'John' } }).then(() => {
//   console.log('Deleted');
// });

// 查詢資料
User.findAll().then(users => {
    console.log(users.map(user => user.toJSON()));
  });