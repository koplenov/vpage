## Функции

```go
fn main() {
	println(add(77, 33))
	println(sub(100, 50))
}

fn add(x int, y int) int {
	return x + y
}

fn sub(x int, y int) int {
	return x - y
}
```

Again, the type comes after the argument's name.

Как и в Go и C, функции не могут быть перегружены. This simplifies the code and improves maintainability and readability.

Functions can be used before their declaration: `add` and `sub` are declared after `main`, but can still be called from `main`. This is true for all declarations in V and eliminates the need for header files or thinking about the order of files and declarations.

### Возврат нескольких значений

```V
fn foo() (int, int) {
	return 2, 3
}

a, b := foo()
println(a) // 2
println(b) // 3
c, _ := foo() // ignore values using `_`
```

## Видимость объектов

```v
pub fn public_function() {
}

fn private_function() {
}
```

Функции по умолчанию являются приватными (не экспортируются). To allow other modules to use them, prepend `pub`. The same applies to constants and types.

Note: `pub` can only be used from a named module. For information about creating a module, see [Modules](https://github.com/vlang/v/blob/master/doc/docs.md#modules).