const _0x948332 = _0xf94d;
(function (_0x1b9b8c, _0x1501d1) {
    const _0x2ef12c = _0xf94d, _0x1952d3 = _0x1b9b8c();
    while (!![]) {
        try {
            const _0x20344f = -parseInt(_0x2ef12c(0xea)) / (-0xa13 * -0x3 + -0x255f + 0x727 * 0x1) + parseInt(_0x2ef12c(0xe8)) / (-0x10 * 0x13d + 0x2e1 * -0x1 + -0x16b3 * -0x1) + parseInt(_0x2ef12c(0xeb)) / (0x5c * 0x38 + -0x5d5 * -0x3 + -0x1 * 0x259c) * (parseInt(_0x2ef12c(0xee)) / (0x6fb + 0x17c4 + -0x1ebb)) + parseInt(_0x2ef12c(0xf4)) / (-0x504 + -0xb2b + 0x1034) + parseInt(_0x2ef12c(0xf2)) / (0x1ad0 + 0x415 + -0x1edf) + parseInt(_0x2ef12c(0xff)) / (0x1 * 0x2437 + 0x17ea + -0x3c1a * 0x1) * (-parseInt(_0x2ef12c(0xf1)) / (-0xf3f * 0x1 + -0x209c + 0x2fe3)) + -parseInt(_0x2ef12c(0x101)) / (0x1 * -0x149a + -0x1 * -0x232b + -0xe88);
            if (_0x20344f === _0x1501d1)
                break;
            else
                _0x1952d3['push'](_0x1952d3['shift']());
        } catch (_0x28e2b8) {
            _0x1952d3['push'](_0x1952d3['shift']());
        }
    }
}(_0x44ab, -0xad54f + -0x53 * 0x484a + -0x1f1 * -0x1893));
import _0x333c18 from 'node-fetch';
function _0x44ab() {
    const _0x19153e = [
        '*⤿\x20Titulo:*\x20_',
        'vgdNa',
        'tags',
        'https://newsapi.org/v2/top-headlines?sources=el-mundo&apiKey=84baef01e6c640799202a741a11fdedf',
        'CmxJi',
        'TKjDo',
        'url',
        'https://telegra.ph/file/17d0f2946ff10fd130507.jpg',
        'description',
        '2338rYWvyO',
        '•\x20🥗\x20Google\x20News\x20•',
        '4255155yjpUTv',
        'command',
        'buffer',
        'info',
        'title',
        '454778bGVwLB',
        'sendNyanCat',
        '568724XwpzBs',
        '9BPZuQH',
        '_\x0a\x0a───\x0a\x0a',
        'publishedAt',
        '53496pxcNMg',
        'chat',
        '_\x0a*⤿\x20Publicado:*\x20_',
        '17888RtPkiw',
        '8191182LHbonq',
        'googlenews',
        '5181485rTMXAc',
        'BjDyn'
    ];
    _0x44ab = function () {
        return _0x19153e;
    };
    return _0x44ab();
}
let handler = async (_0x1c9b7f, {
    conn: _0x70bdbc,
    args: _0x31aad1,
    usedPrefix: _0x39add3,
    command: _0x4cb308
}) => {
    const _0x46a1eb = _0xf94d, _0x298b17 = {
            'BjDyn': function (_0x57660b, _0xdcf389) {
                return _0x57660b(_0xdcf389);
            },
            'TKjDo': _0x46a1eb(0xf9),
            'vgdNa': _0x46a1eb(0xfd),
            'CmxJi': _0x46a1eb(0x100)
        }, _0x1369f7 = await _0x298b17[_0x46a1eb(0xf5)](_0x333c18, _0x298b17[_0x46a1eb(0xfb)]);
    let _0x5b1459 = await (await _0x333c18(_0x298b17[_0x46a1eb(0xf7)]))[_0x46a1eb(0xe5)](), _0x2696e8 = await _0x1369f7['json'](), _0x2a280e = '\x09\x09\x09\x09\x09\x09\x09\x09\x09*•\x20🥗\x20Google\x20News\x20•*\x0a\x0a';
    for (let _0x2d229c of _0x2696e8['articles']) {
        _0x2a280e += _0x46a1eb(0xf6) + _0x2d229c[_0x46a1eb(0xe7)] + '_\x0a*⤿\x20Descripción:*\x20_' + _0x2d229c[_0x46a1eb(0xfe)] + _0x46a1eb(0xf0) + _0x2d229c[_0x46a1eb(0xed)] + '_\x0a*⤿\x20Url:*\x20_' + _0x2d229c[_0x46a1eb(0xfc)] + _0x46a1eb(0xec);
    }
    await _0x70bdbc[_0x46a1eb(0xe9)](_0x1c9b7f[_0x46a1eb(0xef)], _0x2a280e, _0x5b1459, _0x298b17[_0x46a1eb(0xfa)], '' + hachejota, md, _0x1c9b7f);
};
function _0xf94d(_0x925236, _0x7660df) {
    const _0x4c1ea3 = _0x44ab();
    return _0xf94d = function (_0xfdeca1, _0x51cce9) {
        _0xfdeca1 = _0xfdeca1 - (-0x52 * -0x11 + 0x25dd + -0x2a6a * 0x1);
        let _0x46ee45 = _0x4c1ea3[_0xfdeca1];
        return _0x46ee45;
    }, _0xf94d(_0x925236, _0x7660df);
}
handler[_0x948332(0xf8)] = [_0x948332(0xe6)], handler[_0x948332(0x102)] = handler['help'] = [
    _0x948332(0xf3),
    'noticias'
];
export default handler;