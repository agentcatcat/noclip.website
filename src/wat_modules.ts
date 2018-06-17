// Generated by build_wat.js

// yaz0_as.wat
export interface yaz0_asExports {
    memory: WebAssembly.Memory;
}
const yaz0_asCode = new Uint8Array([0,97,115,109,1,0,0,0,1,11,2,96,3,127,127,127,0,96,0,1,127,3,2,1,0,5,3,1,0,1,6,6,1,127,0,65,4,11,7,23,2,10,100,101,99,111,109,112,114,101,115,115,0,0,6,109,101,109,111,114,121,2,0,10,178,3,1,175,3,1,17,127,32,0,33,3,32,1,33,4,2,64,3,64,65,1,4,64,2,64,2,64,2,127,2,127,32,4,33,5,32,5,65,1,106,33,4,32,5,11,33,5,32,5,45,0,0,12,0,11,33,6,65,8,33,7,2,64,3,64,2,127,32,7,33,8,32,8,65,1,107,33,7,32,8,11,65,255,1,113,4,64,2,64,2,64,32,6,65,1,32,7,116,113,65,255,1,113,4,64,2,64,32,2,65,1,107,33,2,2,64,2,127,32,3,33,8,32,8,65,1,106,33,3,32,8,11,33,8,2,127,2,127,32,4,33,9,32,9,65,1,106,33,4,32,9,11,33,9,32,9,45,0,0,12,0,11,33,10,32,8,32,10,58,0,0,11,11,5,2,64,2,127,32,4,45,0,0,65,8,116,32,4,65,1,106,45,0,0,114,65,255,255,3,113,12,0,11,33,11,32,4,65,2,106,33,4,32,11,65,255,31,113,65,1,106,33,12,32,11,65,255,255,3,113,65,12,118,65,2,106,65,255,1,113,33,13,32,13,65,2,70,4,64,2,64,2,127,2,127,32,4,33,14,32,14,65,1,106,33,4,32,14,11,33,14,32,14,45,0,0,12,0,11,65,255,1,113,33,15,32,13,32,15,65,16,106,106,33,13,11,11,32,3,32,12,65,255,255,3,113,107,33,16,32,2,32,13,107,33,2,2,64,3,64,2,127,32,13,33,17,32,17,65,1,107,33,13,32,17,11,65,255,255,3,113,4,64,2,64,2,64,2,127,32,3,33,17,32,17,65,1,106,33,3,32,17,11,33,17,2,127,2,127,32,16,33,18,32,18,65,1,106,33,16,32,18,11,33,18,32,18,45,0,0,12,0,11,33,19,32,17,32,19,58,0,0,11,12,2,11,11,11,11,11,11,32,2,65,0,76,4,64,15,11,11,12,2,11,11,11,11,11,12,2,11,11,11,11,11]);
export function yaz0_asInstance(imports?: any): Promise<yaz0_asExports> {
    return WebAssembly.compile(yaz0_asCode).then((module: WebAssembly.Module) => {
        return WebAssembly.instantiate(module, imports);
    }).then((instance: WebAssembly.Instance) => {
        return (<yaz0_asExports> instance.exports);
    });
}

// gx/gx_texture_as.wat
export interface gx_texture_asExports {
    memory: WebAssembly.Memory;
}
const gx_texture_asCode = new Uint8Array([0,97,115,109,1,0,0,0,1,13,2,96,5,127,127,127,127,127,0,96,0,1,127,3,9,8,0,0,0,0,0,0,0,0,5,3,1,0,1,6,6,1,127,0,65,4,11,7,121,9,9,100,101,99,111,100,101,95,73,52,0,0,9,100,101,99,111,100,101,95,73,56,0,1,10,100,101,99,111,100,101,95,73,65,52,0,2,10,100,101,99,111,100,101,95,73,65,56,0,3,13,100,101,99,111,100,101,95,82,71,66,53,54,53,0,4,13,100,101,99,111,100,101,95,82,71,66,53,65,51,0,5,12,100,101,99,111,100,101,95,82,71,66,65,56,0,6,11,100,101,99,111,100,101,95,67,77,80,82,0,7,6,109,101,109,111,114,121,2,0,10,161,36,8,178,2,1,15,127,65,0,33,5,2,64,65,0,33,6,3,64,32,6,32,4,73,4,64,2,64,2,64,65,0,33,7,3,64,32,7,32,3,73,4,64,2,64,2,64,65,0,33,8,3,64,32,8,65,8,73,4,64,2,64,2,64,65,0,33,9,3,64,32,9,65,8,73,4,64,2,64,2,64,32,3,32,6,32,8,65,255,1,113,106,108,32,7,106,32,9,65,255,1,113,106,33,10,32,1,32,10,65,4,108,106,33,11,2,127,32,2,32,5,65,1,118,106,33,12,32,12,45,0,0,12,0,11,33,13,32,13,65,255,1,113,32,5,65,1,113,4,127,65,0,5,65,4,11,118,65,15,113,33,14,2,127,32,14,65,4,116,32,14,114,65,255,1,113,12,0,11,33,15,2,64,32,11,65,0,106,33,16,32,16,32,15,58,0,0,11,2,64,32,11,65,1,106,33,17,32,17,32,15,58,0,0,11,2,64,32,11,65,2,106,33,18,32,18,32,15,58,0,0,11,2,64,32,11,65,3,106,33,19,32,19,32,15,58,0,0,11,32,5,65,1,106,33,5,11,32,9,65,1,106,33,9,12,2,11,11,11,11,32,8,65,1,106,33,8,12,2,11,11,11,11,32,7,65,8,106,33,7,12,2,11,11,11,11,32,6,65,8,106,33,6,12,2,11,11,11,11,11,131,2,1,13,127,65,0,33,5,2,64,65,0,33,6,3,64,32,6,32,4,73,4,64,2,64,2,64,65,0,33,7,3,64,32,7,32,3,73,4,64,2,64,2,64,65,0,33,8,3,64,32,8,65,4,73,4,64,2,64,2,64,65,0,33,9,3,64,32,9,65,8,73,4,64,2,64,2,64,32,3,32,6,32,8,65,255,1,113,106,108,32,7,106,32,9,65,255,1,113,106,33,10,32,1,32,10,65,4,108,106,33,11,2,127,32,2,32,5,106,33,12,32,12,45,0,0,12,0,11,33,13,2,64,32,11,65,0,106,33,14,32,14,32,13,58,0,0,11,2,64,32,11,65,1,106,33,15,32,15,32,13,58,0,0,11,2,64,32,11,65,2,106,33,16,32,16,32,13,58,0,0,11,2,64,32,11,65,3,106,33,17,32,17,32,13,58,0,0,11,32,5,65,1,106,33,5,11,32,9,65,1,106,33,9,12,2,11,11,11,11,32,8,65,1,106,33,8,12,2,11,11,11,11,32,7,65,8,106,33,7,12,2,11,11,11,11,32,6,65,4,106,33,6,12,2,11,11,11,11,11,187,2,1,17,127,65,0,33,5,2,64,65,0,33,6,3,64,32,6,32,4,73,4,64,2,64,2,64,65,0,33,7,3,64,32,7,32,3,73,4,64,2,64,2,64,65,0,33,8,3,64,32,8,65,4,73,4,64,2,64,2,64,65,0,33,9,3,64,32,9,65,8,73,4,64,2,64,2,64,32,3,32,6,32,8,65,255,1,113,106,108,32,7,106,32,9,65,255,1,113,106,33,10,32,1,32,10,65,4,108,106,33,11,2,127,32,2,32,5,106,33,12,32,12,45,0,0,12,0,11,33,13,2,127,32,13,65,255,1,113,65,4,118,33,14,32,14,65,4,116,32,14,114,65,255,1,113,12,0,11,33,15,2,127,32,13,65,15,113,33,16,32,16,65,4,116,32,16,114,65,255,1,113,12,0,11,33,17,2,64,32,11,65,0,106,33,18,32,18,32,17,58,0,0,11,2,64,32,11,65,1,106,33,19,32,19,32,17,58,0,0,11,2,64,32,11,65,2,106,33,20,32,20,32,17,58,0,0,11,2,64,32,11,65,3,106,33,21,32,21,32,15,58,0,0,11,32,5,65,1,106,33,5,11,32,9,65,1,106,33,9,12,2,11,11,11,11,32,8,65,1,106,33,8,12,2,11,11,11,11,32,7,65,8,106,33,7,12,2,11,11,11,11,32,6,65,4,106,33,6,12,2,11,11,11,11,11,156,2,1,15,127,65,0,33,5,2,64,65,0,33,6,3,64,32,6,32,4,73,4,64,2,64,2,64,65,0,33,7,3,64,32,7,32,3,73,4,64,2,64,2,64,65,0,33,8,3,64,32,8,65,4,73,4,64,2,64,2,64,65,0,33,9,3,64,32,9,65,4,73,4,64,2,64,2,64,32,3,32,6,32,8,65,255,1,113,106,108,32,7,106,32,9,65,255,1,113,106,33,10,32,1,32,10,65,4,108,106,33,11,2,127,32,2,32,5,106,65,0,106,33,12,32,12,45,0,0,12,0,11,33,13,2,127,32,2,32,5,106,65,1,106,33,14,32,14,45,0,0,12,0,11,33,15,2,64,32,11,65,0,106,33,16,32,16,32,15,58,0,0,11,2,64,32,11,65,1,106,33,17,32,17,32,15,58,0,0,11,2,64,32,11,65,2,106,33,18,32,18,32,15,58,0,0,11,2,64,32,11,65,3,106,33,19,32,19,32,13,58,0,0,11,32,5,65,2,106,33,5,11,32,9,65,1,106,33,9,12,2,11,11,11,11,32,8,65,1,106,33,8,12,2,11,11,11,11,32,7,65,4,106,33,7,12,2,11,11,11,11,32,6,65,4,106,33,6,12,2,11,11,11,11,11,146,3,1,20,127,65,0,33,5,2,64,65,0,33,6,3,64,32,6,32,4,73,4,64,2,64,2,64,65,0,33,7,3,64,32,7,32,3,73,4,64,2,64,2,64,65,0,33,8,3,64,32,8,65,4,73,4,64,2,64,2,64,65,0,33,9,3,64,32,9,65,4,73,4,64,2,64,2,64,32,3,32,6,32,8,65,255,1,113,106,108,32,7,106,32,9,65,255,1,113,106,33,10,32,1,32,10,65,4,108,106,33,11,2,127,32,2,32,5,106,33,12,32,12,45,0,0,65,8,116,32,12,65,1,106,45,0,0,114,65,255,255,3,113,12,0,11,33,13,2,64,32,11,65,0,106,33,14,2,127,32,13,65,255,255,3,113,65,11,118,65,31,113,33,15,32,15,65,8,65,5,107,116,32,15,65,10,65,8,107,118,114,65,255,1,113,12,0,11,33,16,32,14,32,16,58,0,0,11,2,64,32,11,65,1,106,33,17,2,127,32,13,65,255,255,3,113,65,5,118,65,63,113,33,18,32,18,65,8,65,6,107,116,32,18,65,12,65,8,107,118,114,65,255,1,113,12,0,11,33,19,32,17,32,19,58,0,0,11,2,64,32,11,65,2,106,33,20,2,127,32,13,65,31,113,33,21,32,21,65,8,65,5,107,116,32,21,65,10,65,8,107,118,114,65,255,1,113,12,0,11,33,22,32,20,32,22,58,0,0,11,2,64,32,11,65,3,106,33,23,65,255,1,33,24,32,23,32,24,58,0,0,11,32,5,65,2,106,33,5,11,32,9,65,1,106,33,9,12,2,11,11,11,11,32,8,65,1,106,33,8,12,2,11,11,11,11,32,7,65,4,106,33,7,12,2,11,11,11,11,32,6,65,4,106,33,6,12,2,11,11,11,11,11,245,4,1,32,127,65,0,33,5,2,64,65,0,33,6,3,64,32,6,32,4,73,4,64,2,64,2,64,65,0,33,7,3,64,32,7,32,3,73,4,64,2,64,2,64,65,0,33,8,3,64,32,8,65,4,73,4,64,2,64,2,64,65,0,33,9,3,64,32,9,65,4,73,4,64,2,64,2,64,32,3,32,6,32,8,65,255,1,113,106,108,32,7,106,32,9,65,255,1,113,106,33,10,32,1,32,10,65,4,108,106,33,11,2,127,32,2,32,5,106,33,12,32,12,45,0,0,65,8,116,32,12,65,1,106,45,0,0,114,65,255,255,3,113,12,0,11,33,13,32,13,65,128,128,2,113,4,64,2,64,2,64,32,11,65,0,106,33,14,2,127,32,13,65,255,255,3,113,65,10,118,65,31,113,33,15,32,15,65,8,65,5,107,116,32,15,65,10,65,8,107,118,114,65,255,1,113,12,0,11,33,16,32,14,32,16,58,0,0,11,2,64,32,11,65,1,106,33,17,2,127,32,13,65,255,255,3,113,65,5,118,65,31,113,33,18,32,18,65,8,65,5,107,116,32,18,65,10,65,8,107,118,114,65,255,1,113,12,0,11,33,19,32,17,32,19,58,0,0,11,2,64,32,11,65,2,106,33,20,2,127,32,13,65,31,113,33,21,32,21,65,8,65,5,107,116,32,21,65,10,65,8,107,118,114,65,255,1,113,12,0,11,33,22,32,20,32,22,58,0,0,11,2,64,32,11,65,3,106,33,23,65,255,1,33,24,32,23,32,24,58,0,0,11,11,5,2,64,2,64,32,11,65,0,106,33,25,2,127,32,13,65,255,255,3,113,65,8,118,65,15,113,33,26,32,26,65,4,116,32,26,114,65,255,1,113,12,0,11,33,27,32,25,32,27,58,0,0,11,2,64,32,11,65,1,106,33,28,2,127,32,13,65,255,255,3,113,65,4,118,65,15,113,33,29,32,29,65,4,116,32,29,114,65,255,1,113,12,0,11,33,30,32,28,32,30,58,0,0,11,2,64,32,11,65,2,106,33,31,2,127,32,13,65,15,113,33,32,32,32,65,4,116,32,32,114,65,255,1,113,12,0,11,33,33,32,31,32,33,58,0,0,11,2,64,32,11,65,3,106,33,34,2,127,32,13,65,255,1,113,65,12,118,33,35,32,35,65,8,65,3,107,116,32,35,65,8,65,6,107,116,114,32,35,65,9,65,8,107,118,114,65,255,1,113,12,0,11,33,36,32,34,32,36,58,0,0,11,11,11,32,5,65,2,106,33,5,11,32,9,65,1,106,33,9,12,2,11,11,11,11,32,8,65,1,106,33,8,12,2,11,11,11,11,32,7,65,4,106,33,7,12,2,11,11,11,11,32,6,65,4,106,33,6,12,2,11,11,11,11,11,163,3,1,23,127,65,0,33,5,2,64,65,0,33,6,3,64,32,6,32,4,73,4,64,2,64,2,64,65,0,33,7,3,64,32,7,32,3,73,4,64,2,64,2,64,2,64,65,0,33,8,3,64,32,8,65,4,73,4,64,2,64,2,64,65,0,33,9,3,64,32,9,65,4,73,4,64,2,64,2,64,32,3,32,6,32,8,106,108,32,7,106,32,9,106,33,10,32,1,32,10,65,4,108,106,33,11,2,64,32,11,65,3,106,33,12,2,127,32,2,32,5,106,65,0,106,33,13,32,13,45,0,0,12,0,11,33,14,32,12,32,14,58,0,0,11,2,64,32,11,65,0,106,33,15,2,127,32,2,32,5,106,65,1,106,33,16,32,16,45,0,0,12,0,11,33,17,32,15,32,17,58,0,0,11,32,5,65,2,106,33,5,11,32,9,65,1,106,33,9,12,2,11,11,11,11,32,8,65,1,106,33,8,12,2,11,11,11,11,2,64,65,0,33,18,3,64,32,18,65,4,73,4,64,2,64,2,64,65,0,33,19,3,64,32,19,65,4,73,4,64,2,64,2,64,32,3,32,6,32,18,106,108,32,7,106,32,19,106,33,20,32,1,32,20,65,4,108,106,33,21,2,64,32,21,65,1,106,33,22,2,127,32,2,32,5,106,65,0,106,33,23,32,23,45,0,0,12,0,11,33,24,32,22,32,24,58,0,0,11,2,64,32,21,65,2,106,33,25,2,127,32,2,32,5,106,65,1,106,33,26,32,26,45,0,0,12,0,11,33,27,32,25,32,27,58,0,0,11,32,5,65,2,106,33,5,11,32,19,65,1,106,33,19,12,2,11,11,11,11,32,18,65,1,106,33,18,12,2,11,11,11,11,11,32,7,65,4,106,33,7,12,2,11,11,11,11,32,6,65,4,106,33,6,12,2,11,11,11,11,11,218,15,1,131,1,127,32,0,33,5,32,2,33,6,2,64,65,0,33,7,3,64,32,7,32,4,73,4,64,2,64,2,64,65,0,33,8,3,64,32,8,32,3,73,4,64,2,64,2,64,65,0,33,9,3,64,32,9,65,8,73,4,64,2,64,2,64,65,0,33,10,3,64,32,10,65,8,73,4,64,2,64,2,64,2,127,32,6,65,0,106,33,11,32,11,45,0,0,65,8,116,32,11,65,1,106,45,0,0,114,65,255,255,3,113,12,0,11,33,12,2,127,32,6,65,2,106,33,13,32,13,45,0,0,65,8,116,32,13,65,1,106,45,0,0,114,65,255,255,3,113,12,0,11,33,14,2,64,32,5,65,0,106,33,15,2,127,32,12,65,255,255,3,113,65,11,118,65,31,113,33,16,32,16,65,8,65,5,107,116,32,16,65,10,65,8,107,118,114,65,255,1,113,12,0,11,33,17,32,15,32,17,58,0,0,11,2,64,32,5,65,1,106,33,18,2,127,32,12,65,255,255,3,113,65,5,118,65,63,113,33,19,32,19,65,8,65,6,107,116,32,19,65,12,65,8,107,118,114,65,255,1,113,12,0,11,33,20,32,18,32,20,58,0,0,11,2,64,32,5,65,2,106,33,21,2,127,32,12,65,31,113,33,22,32,22,65,8,65,5,107,116,32,22,65,10,65,8,107,118,114,65,255,1,113,12,0,11,33,23,32,21,32,23,58,0,0,11,2,64,32,5,65,3,106,33,24,65,255,1,33,25,32,24,32,25,58,0,0,11,2,64,32,5,65,4,106,33,26,2,127,32,14,65,255,255,3,113,65,11,118,65,31,113,33,27,32,27,65,8,65,5,107,116,32,27,65,10,65,8,107,118,114,65,255,1,113,12,0,11,33,28,32,26,32,28,58,0,0,11,2,64,32,5,65,5,106,33,29,2,127,32,14,65,255,255,3,113,65,5,118,65,63,113,33,30,32,30,65,8,65,6,107,116,32,30,65,12,65,8,107,118,114,65,255,1,113,12,0,11,33,31,32,29,32,31,58,0,0,11,2,64,32,5,65,6,106,33,32,2,127,32,14,65,31,113,33,33,32,33,65,8,65,5,107,116,32,33,65,10,65,8,107,118,114,65,255,1,113,12,0,11,33,34,32,32,32,34,58,0,0,11,2,64,32,5,65,7,106,33,35,65,255,1,33,36,32,35,32,36,58,0,0,11,32,12,65,255,255,3,113,32,14,65,255,255,3,113,75,4,64,2,64,2,64,32,5,65,8,106,33,37,2,127,2,127,32,5,65,4,106,33,38,32,38,45,0,0,12,0,11,65,255,1,113,33,39,2,127,32,5,65,0,106,33,40,32,40,45,0,0,12,0,11,65,255,1,113,33,41,32,39,65,1,116,32,39,106,32,41,65,2,116,32,41,106,106,65,3,118,33,42,32,42,65,255,1,113,12,0,11,33,43,32,37,32,43,58,0,0,11,2,64,32,5,65,9,106,33,44,2,127,2,127,32,5,65,5,106,33,45,32,45,45,0,0,12,0,11,65,255,1,113,33,46,2,127,32,5,65,1,106,33,47,32,47,45,0,0,12,0,11,65,255,1,113,33,48,32,46,65,1,116,32,46,106,32,48,65,2,116,32,48,106,106,65,3,118,33,49,32,49,65,255,1,113,12,0,11,33,50,32,44,32,50,58,0,0,11,2,64,32,5,65,10,106,33,51,2,127,2,127,32,5,65,6,106,33,52,32,52,45,0,0,12,0,11,65,255,1,113,33,53,2,127,32,5,65,2,106,33,54,32,54,45,0,0,12,0,11,65,255,1,113,33,55,32,53,65,1,116,32,53,106,32,55,65,2,116,32,55,106,106,65,3,118,33,56,32,56,65,255,1,113,12,0,11,33,57,32,51,32,57,58,0,0,11,2,64,32,5,65,11,106,33,58,65,255,1,33,59,32,58,32,59,58,0,0,11,2,64,32,5,65,12,106,33,60,2,127,2,127,32,5,65,0,106,33,61,32,61,45,0,0,12,0,11,65,255,1,113,33,62,2,127,32,5,65,4,106,33,63,32,63,45,0,0,12,0,11,65,255,1,113,33,64,32,62,65,1,116,32,62,106,32,64,65,2,116,32,64,106,106,65,3,118,33,65,32,65,65,255,1,113,12,0,11,33,66,32,60,32,66,58,0,0,11,2,64,32,5,65,13,106,33,67,2,127,2,127,32,5,65,1,106,33,68,32,68,45,0,0,12,0,11,65,255,1,113,33,69,2,127,32,5,65,5,106,33,70,32,70,45,0,0,12,0,11,65,255,1,113,33,71,32,69,65,1,116,32,69,106,32,71,65,2,116,32,71,106,106,65,3,118,33,72,32,72,65,255,1,113,12,0,11,33,73,32,67,32,73,58,0,0,11,2,64,32,5,65,14,106,33,74,2,127,2,127,32,5,65,2,106,33,75,32,75,45,0,0,12,0,11,65,255,1,113,33,76,2,127,32,5,65,6,106,33,77,32,77,45,0,0,12,0,11,65,255,1,113,33,78,32,76,65,1,116,32,76,106,32,78,65,2,116,32,78,106,106,65,3,118,33,79,32,79,65,255,1,113,12,0,11,33,80,32,74,32,80,58,0,0,11,2,64,32,5,65,15,106,33,81,65,255,1,33,82,32,81,32,82,58,0,0,11,11,5,2,64,2,64,32,5,65,8,106,33,83,2,127,2,127,32,5,65,0,106,33,84,32,84,45,0,0,12,0,11,65,255,1,113,33,85,2,127,32,5,65,4,106,33,86,32,86,45,0,0,12,0,11,65,255,1,113,33,87,32,85,32,87,106,65,1,118,33,88,32,88,65,255,1,113,12,0,11,33,89,32,83,32,89,58,0,0,11,2,64,32,5,65,9,106,33,90,2,127,2,127,32,5,65,1,106,33,91,32,91,45,0,0,12,0,11,65,255,1,113,33,92,2,127,32,5,65,5,106,33,93,32,93,45,0,0,12,0,11,65,255,1,113,33,94,32,92,32,94,106,65,1,118,33,95,32,95,65,255,1,113,12,0,11,33,96,32,90,32,96,58,0,0,11,2,64,32,5,65,10,106,33,97,2,127,2,127,32,5,65,2,106,33,98,32,98,45,0,0,12,0,11,65,255,1,113,33,99,2,127,32,5,65,6,106,33,100,32,100,45,0,0,12,0,11,65,255,1,113,33,101,32,99,32,101,106,65,1,118,33,102,32,102,65,255,1,113,12,0,11,33,103,32,97,32,103,58,0,0,11,2,64,32,5,65,11,106,33,104,65,255,1,33,105,32,104,32,105,58,0,0,11,2,64,32,5,65,12,106,33,106,2,127,32,5,65,8,106,33,107,32,107,45,0,0,12,0,11,33,108,32,106,32,108,58,0,0,11,2,64,32,5,65,13,106,33,109,2,127,32,5,65,9,106,33,110,32,110,45,0,0,12,0,11,33,111,32,109,32,111,58,0,0,11,2,64,32,5,65,14,106,33,112,2,127,32,5,65,10,106,33,113,32,113,45,0,0,12,0,11,33,114,32,112,32,114,58,0,0,11,2,64,32,5,65,15,106,33,115,65,0,33,116,32,115,32,116,58,0,0,11,11,11,2,64,65,0,33,117,3,64,32,117,65,4,72,4,64,2,64,2,64,2,127,32,6,65,4,106,32,117,106,33,118,32,118,45,0,0,12,0,11,33,119,2,64,65,0,33,120,3,64,32,120,65,4,72,4,64,2,64,2,64,32,7,32,9,106,32,117,106,32,3,108,32,8,106,32,10,106,32,120,106,33,121,32,1,32,121,65,4,108,106,33,122,32,119,65,255,1,113,65,6,118,65,3,113,33,123,2,64,32,122,65,0,106,33,124,2,127,32,5,32,123,65,4,108,65,255,1,113,106,65,0,106,33,125,32,125,45,0,0,12,0,11,33,126,32,124,32,126,58,0,0,11,2,64,32,122,65,1,106,33,127,2,127,32,5,32,123,65,4,108,65,255,1,113,106,65,1,106,33,128,1,32,128,1,45,0,0,12,0,11,33,129,1,32,127,32,129,1,58,0,0,11,2,64,32,122,65,2,106,33,130,1,2,127,32,5,32,123,65,4,108,65,255,1,113,106,65,2,106,33,131,1,32,131,1,45,0,0,12,0,11,33,132,1,32,130,1,32,132,1,58,0,0,11,2,64,32,122,65,3,106,33,133,1,2,127,32,5,32,123,65,4,108,65,255,1,113,106,65,3,106,33,134,1,32,134,1,45,0,0,12,0,11,33,135,1,32,133,1,32,135,1,58,0,0,11,32,119,65,2,116,33,119,11,32,120,65,1,106,33,120,12,2,11,11,11,11,11,32,117,65,1,106,33,117,12,2,11,11,11,11,32,6,65,8,106,33,6,11,32,10,65,4,106,33,10,12,2,11,11,11,11,32,9,65,4,106,33,9,12,2,11,11,11,11,32,8,65,8,106,33,8,12,2,11,11,11,11,32,7,65,8,106,33,7,12,2,11,11,11,11,11]);
export function gx_texture_asInstance(imports?: any): Promise<gx_texture_asExports> {
    return WebAssembly.compile(gx_texture_asCode).then((module: WebAssembly.Module) => {
        return WebAssembly.instantiate(module, imports);
    }).then((instance: WebAssembly.Instance) => {
        return (<gx_texture_asExports> instance.exports);
    });
}