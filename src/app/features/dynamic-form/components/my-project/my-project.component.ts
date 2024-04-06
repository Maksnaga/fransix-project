import { Component } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { NodeService } from '../../service/node.service';
import { DynamicFormService } from '../../service/dynamic-form.service';

@Component({
  selector: 'app-my-project',
  templateUrl: './my-project.component.html',
  styleUrls: ['./my-project.component.scss'],
})
export class MyProjectComponent {
  files!: TreeNode[];

  constructor(
    private nodeService: NodeService,
    public dynamicFormService: DynamicFormService
  ) {}

  ngOnInit() {
    this.nodeService.getFiles().then((data) => (this.files = data));
    setTimeout(() => {
      this.dynamicFormService.progress = 10;
    }, 10);
  }

  nodeSelect(): void {
    this.dynamicFormService.disabledNextButton = false;
    const formattedText = this.dynamicFormService.selectedNodes
      .map((item: any) => {
        if (!item.children) return;
        const childrenText = item.children
          .map((child: any) => `    - ${child.label}`)
          .join('\n');
        return `${item.label}:\n${childrenText}`;
      })
      .join('\n');
    this.dynamicFormService.message = formattedText;
  }

  nodeUnselect(): void {
    if (
      this.dynamicFormService.selectedNodes &&
      this.dynamicFormService.selectedNodes.length === 0
    ) {
      this.dynamicFormService.disabledNextButton = true;
    }
  }
}
