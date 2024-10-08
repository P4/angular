/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {TsurgeMigration} from '../migration';
import {Serializable} from '../helpers/serializable';
import ts from 'typescript';
import {NgtscProgram} from '../../../../../compiler-cli/src/ngtsc/program';

/**
 * Executes the analyze phase of the given migration against
 * the specified TypeScript project.
 *
 * @returns the serializable migration unit data.
 */
export async function executeAnalyzePhase<
  UnitData,
  GlobalData,
  TsProgramType extends ts.Program | NgtscProgram,
>(
  migration: TsurgeMigration<UnitData, GlobalData, TsProgramType, unknown>,
  tsconfigAbsolutePath: string,
): Promise<Serializable<UnitData>> {
  const baseInfo = migration.createProgram(tsconfigAbsolutePath);
  const info = migration.prepareProgram(baseInfo);

  return await migration.analyze(info);
}
