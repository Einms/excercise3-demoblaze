export const loginTestData = [
    {
        username: 'sipalingtestingdummy',
        password: 'Dummy123',
        expected: 'success'
    },
    {
        username: 'sipalingtestingdummy123',
        password: 'Dummy123',
        expected: 'user does not exist'
    },
    {
        username: 'sipalingtesting',
        password: 'xxx',
        expected: 'wrong password'
    },
    {
        username: '',
        password: 'xxxx',
        expected: 'username kosong'
    },
    {
        username: 'sipaling',
        password: '',
        expected: 'password kosong'
    }
]