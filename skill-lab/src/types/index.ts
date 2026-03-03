export interface ImpactScore {
  overall: number;        // 1-10
  downloads?: number;
  stars?: number;
  citations?: number;
  isEstimated: boolean;
}

export interface StructureAnalysis {
  hasClearGoal: boolean;
  hasStepByStep: boolean;
  hasIODefinition: boolean;
  lowersBarrier: boolean;
  hasReusableTemplate: boolean;
  score: number;          // 0-5, auto-calculated
  details: string;
}

export interface ValueDensity {
  informationCompression: number;  // 1-5
  reducesDecisionCost: boolean;
  reducesTrialError: boolean;
  readyToUse: boolean;
  score: number;
  details: string;
}

export interface Psychology {
  solvesAnxiety: boolean;
  createsCertainty: boolean;
  empowers: boolean;
  hasAchievementMechanism: boolean;
  score: number;
  details: string;
}

export interface FormulaElement {
  name: string;
  role: string;
}

export interface ReusablePattern {
  formula: string;
  formulaElements?: FormulaElement[];
  abstractFramework: string;
  tags: string[];
}

export interface ReverseEngineering {
  intro?: string;
  blueprint: string;
  templateCode: string;
}

export interface Improvement {
  gap: string;
  suggestion: string;
}

export interface Highlight {
  title: string;
  quote?: string;
  explanation: string;
  insight: string;
}

export interface SkillNarrative {
  hook: string;
  intro: string;
  highlights: Highlight[];
  structureLogic: string;
  patternMatches?: string[];
  takeaways: string[];
}

export type SkillCategory =
  | 'generation'
  | 'knowledge-base'
  | 'review'
  | 'meta'
  | 'philosophy';

export type SkillArchetype =
  | 'workflow'
  | 'database'
  | 'agent'
  | 'guideline'
  | 'methodology';

export interface SkillData {
  id: string;
  name: string;
  reportTitle?: string;
  source: string;

  surface: {
    tagline: string;
    problem: string;
    targetUser: string;
    impact: ImpactScore;
  };

  narrative: SkillNarrative;

  structure: StructureAnalysis;
  valueDensity: ValueDensity;
  psychology: Psychology;
  pattern: ReusablePattern;
  reverseEngineering: ReverseEngineering;
  improvements: Improvement[];

  meta: {
    category: SkillCategory;
    archetype: SkillArchetype;
    tags: string[];
    lineCount: number;
    hasScripts: boolean;
    hasReferences: boolean;
    hasAssets: boolean;
  };
}

export interface PatternData {
  id: string;
  name: string;
  nameZh: string;
  frequency: number;       // how many skills use it
  totalSkills: number;
  description: string;
  examples: string[];
  category: 'structure' | 'psychology' | 'value' | 'failure';
  skillIds: string[];
}

export type SortKey = 'impact' | 'structure' | 'value' | 'psychology' | 'name';
export type FilterTag = string;
