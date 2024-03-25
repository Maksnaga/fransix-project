import { Component } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { NodeService } from '../../service/node.service';
import { DynamicFormService } from '../../service/dybamic-form.service';

@Component({
  selector: 'app-my-project',
  templateUrl: './my-project.component.html',
  styleUrls: ['./my-project.component.scss'],
})
export class MyProjectComponent {
  files!: TreeNode[];
  selectedFiles: TreeNode[] = [];

  constructor(
    private nodeService: NodeService,
    private dynamicFormService: DynamicFormService
  ) {}

  ngOnInit() {
    this.nodeService.getFiles().then((data) => (this.files = data));
  }

  nodeSelect($event: any): void {
    this.dynamicFormService.disabledNextButton.next(false);
    const formattedText = this.selectedFiles
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

  nodeUnselect($event: any): void {
    if (this.selectedFiles && this.selectedFiles.length === 0) {
      this.dynamicFormService.disabledNextButton.next(true);
    }
  }
}
