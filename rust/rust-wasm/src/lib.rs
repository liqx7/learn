#[cfg(test)]
mod tests {
    #[test]
    fn it_works() {
        let result = 2 + 2;
        assert_eq!(result, 4);
    }
}


use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern "C" {
  fn alert(s: &str);
}

#[wasm_bindgen]
pub fn big_computation(){
  alert("这个是一个耗时的计算")
}

#[wasm_bindgen]
pub fn welcome(name: &str){
  alert(&format!("Hi 我是{} , 我在这！",name))
}