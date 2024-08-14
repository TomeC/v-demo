import { name } from 'file-loader';
import Mock from 'mockjs';

Mock.mock('/api/mock/logo/config', {
    code: 0,
    msg: 'success',
    data: {
        id: 1,
        name: '@name'
    }
})
Mock.mock('/api/login', {
    "code|0-1": 1,
    msg: 'success',
    data: {
        token: '@guid'
    }
})