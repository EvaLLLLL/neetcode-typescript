import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current file directory in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Helper function to convert string to camelCase
function toCamelCase(str: string): string {
    return str
        .split('-')
        .map((word, index) => 
            index === 0 
                ? word.toLowerCase()
                : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join('');
}

const problemTemplate = `export function {{solution}}() {
    // TODO: Implement your solution here
}`;

const testTemplate = `import { {{solution}} } from '../problems/{{fileName}}';

describe('{{fileName}}', () => {
    test('should work', () => {
        // TODO: Add test cases
        expect({{solution}}()).toBeDefined();
    });
});`;

function generateFiles(fileName: string) {
    // Validate filename
    if (!fileName) {
        console.error('Please provide a file name!');
        process.exit(1);
    }

    const solutionName = toCamelCase(fileName);

    // Create file paths
    const problemPath = path.join(__dirname, '../../src/problems', `${fileName}.ts`);
    const testPath = path.join(__dirname, '../../src/test', `${fileName}.test.ts`);

    // Ensure directories exist
    fs.mkdirSync(path.dirname(problemPath), { recursive: true });
    fs.mkdirSync(path.dirname(testPath), { recursive: true });

    // Generate problem file
    const problemContent = problemTemplate.replace(/{{solution}}/g, solutionName);
    fs.writeFileSync(problemPath, problemContent);
    console.log(`✅ Created problem file: ${problemPath}`);

    // Generate test file
    const testContent = testTemplate
        .replace(/{{fileName}}/g, fileName)
        .replace(/{{solution}}/g, solutionName);
    fs.writeFileSync(testPath, testContent);
    console.log(`✅ Created test file: ${testPath}`);
}

// Get filename from command line arguments
const fileName = process.argv[2];
generateFiles(fileName);
