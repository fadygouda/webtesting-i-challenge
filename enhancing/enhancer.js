module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  item.enhancement != 20 ? item.enhancement++ : item.enhancement;
  return { ...item };
}

function fail(item) {
  const { enhancement } = item;
  if(enhancement > 16) {
    item.durability -= 10, item.enhancement -= 1;
  } else if(enhancement > 14) {
    item.durability -= 10; 
  } else {
    item.durability -= 5;
  }

  return { ...item };
}


function repair(item) {
  item.durability = 100;
  return { ...item };
}

function get(item) {
  if(item.enhancement > 0) {
    item.name = `[+${item.enhancement}] ${item.name}`
  }
  return { ...item };
}
