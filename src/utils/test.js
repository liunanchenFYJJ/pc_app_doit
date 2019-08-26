let c = 'test';

function a() {
  console.log('a');
}

function b() {
  console.log('b');
  console.log(c);
  a();
}

export {b};
