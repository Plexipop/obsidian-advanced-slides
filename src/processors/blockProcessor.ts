export class BlockProcessor {
	process(markdown: string) {
		return this.transformBlock(markdown);
	}

	transformBlock(markdown: string) {
		markdown = markdown.replaceAll('::: block', '<div class="block">\n');
		markdown = markdown.replaceAll(':::', '</div>');
		return markdown;
	}
}
