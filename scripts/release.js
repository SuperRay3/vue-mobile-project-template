const fs = require('fs-extra')
const assert = require('assert')
const path = require('path')
const exec = require('child_process').execSync
const consola = require('consola')

assert(process.cwd() !== __dirname)

const rootDir = path.resolve(__dirname, '..')
const packageJSONDir = path.join(rootDir, 'package.json')

async function release() {
  const rawPackageJSON = await fs.readFile(packageJSONDir)
  const packageJSON = JSON.parse(rawPackageJSON)
  const version = packageJSON.version

  exec(`bump --commit "build(package.json): 更新版本号为 ${version}" --tag --version`, {
    stdio: 'inherit'
  })
  consola.success(`版本号更新完成！最新版本号为：${version}`)

  exec('yarn changelog', { stdio: 'inherit' })
  consola.success('changelog 生成完成！')

  exec(`git add . && git commit -m "build(package.json): 生成 ${version} changelog"`, { stdio: 'inherit' })

  consola.start('开始构建...')
  exec('yarn build', { stdio: 'inherit' })
  consola.success('构建完成！')
}

async function cli() {
  try {
    release()
  } catch (e) {
    console.error(e)
    process.exit(1)
  }
}

if (require.main === module) cli()
