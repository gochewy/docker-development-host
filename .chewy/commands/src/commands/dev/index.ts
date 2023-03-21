import * as chewy from '@gochewy/lib'
import {constants} from '@gochewy/lib'
import {Command} from '@oclif/core'
import {LocalWorkspace} from '@pulumi/pulumi/automation'
import {execSync} from 'node:child_process'
import {resolve} from 'node:path'
import {cwd} from 'node:process'

export default class DevIndex extends Command {
  static description = 'runs the component in development'
  static strict = false

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static flags = {}

  static args = []

  public async run(): Promise<void> {
    this.config.runCommand('deploy', ['dev'])
  }
}
