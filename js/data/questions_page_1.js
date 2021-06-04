const code_helloWorld_csharp = `
using System;
namespace HelloWorld
{
  class Hello {
    static void Main(string[] args)
    {
      System.Console.WriteLine("Hello World!");
    }
  }
}
`.trim()

const code_helloWorld_java = `
class HelloWorld {
  public static void main( String []args ) {
    System.out.println( "Hello World!" );
  }
}
`.trim()

const code_helloWorld_javascript = `
console.log('Hello World!')
`.trim()

const code_helloWorld_php = `
&lt;?php
  echo "Hello World!";
?&gt;
`.trim()

const code_helloWorld_python = `
print("Hello World!");
`.trim()

const code_helloWorld_swift = `
print("Hello World!")
`.trim()

const questionsPage1 = [
  {
    order: 0,
    text: code_helloWorld_csharp,
    values: [
      {
        type: 'language',
        val: 'csharp',
        points: 1,
      },
    ],
  },
  {
    order: 1,
    text: code_helloWorld_java,
    values: [
      {
        type: 'language',
        val: 'java',
        points: 1,
      },
    ],
  },
  {
    order: 2,
    text: code_helloWorld_javascript,
    values: [
      {
        type: 'language',
        val: 'javascript',
        points: 1,
      },
    ],
  },
  {
    order: 3,
    text: code_helloWorld_php,
    values: [
      {
        type: 'language',
        val: 'php',
        points: 1,
      },
    ],
  },
  {
    order: 4,
    text: code_helloWorld_python,
    values: [
      {
        type: 'language',
        val: 'python',
        points: 1,
      },
    ],
  },
  {
    order: 5,
    text: code_helloWorld_swift,
    values: [
      {
        type: 'language',
        val: 'swift',
        points: 1,
      },
    ],
  },
]
