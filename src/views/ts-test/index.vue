<template>
  <div>
    <pageTitle title="TypeScript使用" />
    <ul>
      <li v-for="(item, index) in list" :key="index">
        {{ index + 1 }}、{{ item }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted } from 'vue'

export default defineComponent({
  setup() {
    const list = reactive([
      '基础静态类型和对象类型',
      '类型注释和推断',
      'interface接口',
      '类的访问类型',
      '枚举类型'
    ])

    onMounted(() => {
      useType()
      useTypeAnnotation()
      useInterface()
      useVisitType()
      useEnum()
    })

    return {
      list
    }
  }
})

// 类型使用
function useType() {
  // 对象类型
  const obj: {
    name: string
    age: number
  } = {
    name: '小小',
    age: 18
  }
  console.log(obj)
  // 数组类型
  const arr1: String[] = ['小小', '小影', '小红']
  const arr2: (number | string)[] = [1, 'string', 2]
  type Lady = {
    name: string
    age: Number
  }
  const arr3: Lady[] = [
    { name: '小影', age: 18 },
    { name: '小小', age: 28 }
  ]
  // 类类型
  class Person {}
  const obj2: Person = new Person()
  // 函数类型
  const obj3: () => string = () => {
    return '小小'
  }
  // 元组
  const obj4: [string, string, number][] = [
    ['a', 'teacher', 28],
    ['b', 'teacher', 18],
    ['c', 'teacher', 25]
  ]
}

// 类型注解
function useTypeAnnotation() {
  // 简单类型定义
  function getTotal(one: number, two: number): number {
    return one + two
  }
  const total = getTotal(1, 2)

  // 函数参数为对象（解构）时
  function getNumber({ one }: { one: number }): number {
    return one
  }
  const one = getNumber({ one: 1 })

  // 函数无返回值时定义方法
  function sayHello(): void {
    console.log('hello world')
  }

  // 如果一个函数是永远也执行不完的，就可以定义返回值为never
  function forNever(): never {
    while (true) {}
    console.log('hello world')
  }

  // 多泛型
  function join<T, P>(first: T, second: P) {
    return `${first}${second}`
  }
  console.log(join<number, string>(1, '2'))
}

// 接口
function useInterface() {
  interface Girl {
    name: string
    age: number
    bust: number
    waistline?: number
    [propname: string]: any
    say(): string
  }

  const girl = {
    name: '小小',
    age: 18,
    bust: 94,
    waistline: 21,
    sex: '女',
    say() {
      return '欢迎光临'
    }
  }
  const getResume = (girl: Girl) => {
    console.log(girl.name + '年龄是：' + girl.age)
    console.log(girl.name + '胸围是：' + girl.bust)
    girl.waistline && console.log(girl.name + '腰围是：' + girl.waistline)
    girl.sex && console.log(girl.name + '性别是：' + girl.sex)
  }
  // getResume(girl)
}

// 访问类型
function useVisitType() {
  class Person {
    public name?: string
    private _age: number = 18
    protected _sex: string = '无'

    public sayHello() {
      console.log(this.name + 'say Hello')
      console.log('年龄是：' + this._age)
      console.log('性别是：' + this._sex)
    }
  }
  class Teacher extends Person {
    public sayBye() {
      console.log('继承protected属性：' + this._sex)
    }
  }

  //-------以下属于类的外部--------
  const person = new Person()
  person.name = 'aa.com'
  // person.sayHello()
  // console.log(person.name)
  const teacher = new Teacher()
  // teacher.sayBye()
}

// 枚举
function useEnum() {
  enum Status {
    MASSAGE,
    AA,
    CF
  }
  function getServe(status: any) {
    if (status === Status.MASSAGE) {
      return 'massage'
    } else if (status === Status.AA) {
      return 'aa'
    } else if (status === Status.CF) {
      return 'CF'
    }
  }
  const result = getServe(Status.CF)
  console.log(`我要去${result}`)
}
</script>

<style lang="less" scoped>
li {
  padding: 5px 0;
}
</style>
