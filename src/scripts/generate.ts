import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

function toCamelCase(str: string): string {
  return str
    .split('-')
    .map((word, index) =>
      index === 0
        ? word.toLowerCase()
        : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    )
    .join('')
}

const problemTemplate = `export function {{solution}}() {
    // TODO: Implement your solution here
}`

const testTemplate = `import { {{solution}} } from '../problems/{{fileName}}';

describe('{{fileName}}', () => {
    test('case 1', () => {
        // TODO: Add test cases
        expect({{solution}}()).toBe();
    });
});`

function generateFiles(fileName: string, withTest: boolean) {
  if (!fileName) {
    console.error('Please provide a file name!')
    process.exit(1)
  }

  const solutionName = toCamelCase(fileName)

  const problemPath = path.join(
    __dirname,
    '../../src/problems',
    `${fileName}.ts`
  )
  const testPath = path.join(
    __dirname,
    '../../src/tests',
    `${fileName}.test.ts`
  )

  fs.mkdirSync(path.dirname(problemPath), { recursive: true })

  const problemContent = problemTemplate.replace(/{{solution}}/g, solutionName)
  fs.writeFileSync(problemPath, problemContent)
  console.log(`✅ Created problem file: ${problemPath}`)

  if (withTest) {
    fs.mkdirSync(path.dirname(testPath), { recursive: true })

    const testContent = testTemplate
      .replace(/{{fileName}}/g, fileName)
      .replace(/{{solution}}/g, solutionName)
    fs.writeFileSync(testPath, testContent)
    console.log(`✅ Created test file: ${testPath}`)
  }
}

const fileName = process.argv[2]
const withTest = process.argv[3] === '--with-test'
generateFiles(fileName, withTest)
