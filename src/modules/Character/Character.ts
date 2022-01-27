import type { Character as CharType} from './types';

export class Character {
	name: string
	vocation : string
	attr: number[]
	constructor(args:CharType){
		this.name = args.name
		this.vocation = args.vocation
		this.attr = args.attr
	}

	atack () {
		return `${this.name} attacked!!`
	}

}
