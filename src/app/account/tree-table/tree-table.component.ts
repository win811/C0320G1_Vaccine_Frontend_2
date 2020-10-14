import {Component, OnInit} from '@angular/core';
import {Node, Options} from 'ng-material-treetable';

@Component({
  selector: 'app-tree-table',
  templateUrl: './tree-table.component.html',
  styleUrls: ['./tree-table.component.css']
})
export class TreeTableComponent implements OnInit {

  treeOptions: Options<Report> = {
    capitalisedHeader: true,
    customColumnOrder: [
      'name', 'type', 'backup', 'protected'
    ]
  };

  singleRootTree: Node<Report> = {
    value: {
      type: 'Reports',
      name: 'Eric',
      protected: true,
      backup: true
    },
    children: [
      {
        value: {
          type: 'Charts',
          name: 'Stephanie',
          protected: false,
          backup: true
        },
        children: []
      },
      {
        value: {
          type: 'Sales',
          name: 'Virginia',
          protected: false,
          backup: true
        },
        children: []
      },
      {
        value: {
          type: 'US',
          name: 'Alison',
          protected: true,
          backup: false
        },
        children: [
          {
            value: {
              type: 'California',
              name: 'Claire',
              protected: false,
              backup: false
            },
            children: []
          },
          {
            value: {
              type: 'Washington',
              name: 'Colin',
              protected: false,
              backup: true
            },
            children: [
              {
                value: {
                  type: 'Domestic',
                  name: 'Oliver',
                  protected: true,
                  backup: false
                },
                children: []
              },
              {
                value: {
                  type: 'International',
                  name: 'Oliver',
                  protected: true,
                  backup: true
                },
                children: []
              }
            ]
          }
        ]
      }
    ]
  };

  arrayOfNodesTree: Node<Task>[] = [
    {
      value: {
        type: 'Tasks for Sprint 1',
        completed: true,
        name: 'Marco'
      },
      children: [
        {
          value: {
            type: 'Complete feature #123',
            completed: true,
            name: 'Marco'
          },
          children: []
        },
        {
          value: {
            type: 'Update documentation',
            completed: true,
            name: 'Jane'
          },
          children: [
            {
              value: {
                type: 'Proofread documentation',
                completed: true,
                name: 'Bob'
              },
              children: []
            }
          ]
        }
      ]
    },
    {
      value: {
        type: 'Tasks for Sprint 2',
        completed: false,
        name: 'Erika',
      },
      children: [
        {
          value: {
            type: 'Fix bug #567',
            completed: false,
            name: 'Marco'
          },
          children: []
        },
        {
          value: {
            type: 'Speak with clients',
            completed: true,
            name: 'James'
          },
          children: []
        }
      ]
    }
  ];

  logNode(node: Node<Report>) {
    console.log(node);
  }

  ngOnInit(): void {
  }

}

export interface Report {
  type: string;
  name: string;
  protected: boolean;
  backup: boolean;
}

export interface Task {
  type: string;
  completed: boolean;
  name: string;
}
