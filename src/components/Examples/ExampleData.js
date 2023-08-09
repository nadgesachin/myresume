const examplesArray = [
    {
      topicName: 'Array',
      examples: [
        {
          title: 'Example 1:Finding the sum of two numbers using an array',
          description: 'Finding the sum of two numbers using an array',
          code:`#include <iostream>
          using namespace std;
          int main() {
              const int arraySize = 5;
              int numbers[arraySize] = {2, 4, 6, 8, 10};
              int target = 12;
              bool found = false;
          
              for (int i = 0; i < arraySize; i++) {
                  for (int j = i + 1; j < arraySize; j++) {
                      if (numbers[i] + numbers[j] == target) {
                          found = true;
                          break;
                      }
                  }
                  if (found) {
                      break;
                  }
              }
          
              if (found) {
                  cout <<" found in the array." << endl;
              } else {
                  cout <<" not found in the array." << endl;
              }
          
              return 0;
          } `
        },
        // Add more examples for Array topic
      ],
    },
    {
      topicName: 'String',
      examples: [
        {
          title: 'Example 1:Reverse a String',
          description: 'Description of Example 1 for String topic.',
          code:`#include <iostream>
          using namespace std;
          
          string reverseString(string str) {
              int n = str.length();
              for (int i = 0; i < n / 2; i++) {
                  char temp = str[i];
                  str[i] = str[n - 1 - i];
                  str[n - 1 - i] = temp;
              }
              return str;
          }
          
          int main() {
              string inputString;
              cout << "Enter a string: ";
              cin >> inputString;
          
              string reversedString = reverseString(inputString);
              cout << "Reversed string: " << reversedString << endl;
          
              return 0;
          }
          `,      
        },
        // Add more examples for String topic
      ],
    },
    {
        topicName: 'Stack',
        examples: [
          {
            title: 'Example 1: Balanced Parentheses',
            description: 'Description of Example 1 for String topic.',
            code:`#include <iostream>
            #include <stack>
            using namespace std;
            
            bool isBalanced(string str) {
                stack<char> s;
                for (char c : str) {
                    if (c == '(' || c == '[' || c == '{') {
                        s.push(c);
                    } else if (c == ')' || c == ']' || c == '}') {
                        if (s.empty()) {
                            return false;
                        }
                        char top = s.top();
                        s.pop();
                        if ((c == ')' && top != '(') ||
                            (c == ']' && top != '[') ||
                            (c == '}' && top != '{')) {
                            return false;
                        }
                    }
                }
                return s.empty();
            }
            
            int main() {
                string inputString;
                cout << "Enter a string with parentheses, curly brackets, and square brackets: ";
                cin >> inputString;
            
                if (isBalanced(inputString)) {
                    cout << "The parentheses are balanced." << endl;
                } else {
                    cout << "The parentheses are not balanced." << endl;
                }
            
                return 0;
            }
            `
            }

        ]
    },
    {
        topicName: 'Queue',
        examples: [
          {
            title: 'Example 1: Print Task Queue',
            description: 'Description of Example 1 for String topic.',
            code:`#include <iostream>
            #include <queue>
            using namespace std;
            
            struct PrintJob {
                int timestamp; 
                int processingTime;
            
            double averageWaitingTime(queue<PrintJob>& printQueue) {
                double totalWaitingTime = 0;
                int currentTime = 0;
            
                while (!printQueue.empty()) {
                    PrintJob job = printQueue.front();
                    printQueue.pop();
            
                    currentTime = max(currentTime, job.timestamp);
                    totalWaitingTime += currentTime - job.timestamp;
            
                    currentTime += job.processingTime;
                }
            
                return totalWaitingTime / printQueue.size();
            }
            
            int main() {
                queue<PrintJob> printQueue;
            
                // Add print jobs to the queue
                printQueue.push({0, 3});
                printQueue.push({2, 5});
                printQueue.push({4, 2});
                printQueue.push({7, 1});
            
                double avgWaitingTime = averageWaitingTime(printQueue);
                cout << "Average waiting time jobs: " << avgWaitingTime << endl;
            
                return 0;
            }
            `
            }
        ]
    },
    {
        topicName: 'Linked List',
        examples: [
          {
            title: 'Example 1: Insertion in a Singly Linked List',
            description: 'Description of Example 1 for String topic.',
            code:`#include <iostream>
            using namespace std;
            
            struct Node {
                int data;
                Node* next;
            };
            
            
            Node* createNode(int data) {
                Node* newNode = new Node;
                newNode->data = data;
                newNode->next = nullptr;
                return newNode;
            }
            
            
            Node* insertAtBeginning(Node* head, int data) {
                Node* newNode = createNode(data);
                newNode->next = head;
                return newNode;
            }
            
           
            void printLinkedList(Node* head) {
                Node* current = head;
                while (current != nullptr) {
                    cout << current->data << " -> ";
                    current = current->next;
                }
                cout << "nullptr" << endl;
            }
            
            int main() {
                Node* head = nullptr;
            
                
                head = insertAtBeginning(head, 3);
                head = insertAtBeginning(head, 5);
                head = insertAtBeginning(head, 7);
                head = insertAtBeginning(head, 9);
            
                
                cout << "Linked List: ";
                printLinkedList(head);
            
                return 0;
            }
            `
            }
        ]
    },
    {
        topicName: 'Tree',
        examples: [
          {
            title: 'Example 1: In-order Traversal',
            description: 'Description of Example 1 for String topic.',
            code:`#include <iostream>
            using namespace std;
            
            struct TreeNode {
                int data;
                TreeNode* left;
                TreeNode* right;
            };
            
            // Function to create a new node
            TreeNode* createNode(int data) {
                TreeNode* newNode = new TreeNode;
                newNode->data = data;
                newNode->left = nullptr;
                newNode->right = nullptr;
                return newNode;
            }
            
            // In-order traversal of the binary tree
            void inOrderTraversal(TreeNode* root) {
                if (root) {
                    inOrderTraversal(root->left);
                    cout << root->data << " ";
                    inOrderTraversal(root->right);
                }
            }
            
            int main() {
                // Creating a binary tree
                TreeNode* root = createNode(1);
                root->left = createNode(2);
                root->right = createNode(3);
                root->left->left = createNode(4);
                root->left->right = createNode(5);
                root->right->left = createNode(6);
                root->right->right = createNode(7);
            
                // In-order traversal and output
                cout << "In-order Traversal: ";
                inOrderTraversal(root);
                cout << endl;
            
                return 0;
            }
            `
            }
        ]
    },
    {
        topicName: 'Graph',
        examples: [
          {
            title: 'Example 1: Depth-First Search (DFS)',
            description: 'Description of Example 1 for String topic.',
            code:`#include <iostream>
            #include <vector>
            using namespace std;
            
            const int MAX_NODES = 7;
            
            void dfs(int node, vector<int> graph[], bool visited[]) {
                cout << node << " ";
                visited[node] = true;
            
                for (int i = 0; i < graph[node].size(); i++) {
                    int neighbor = graph[node][i];
                    if (!visited[neighbor]) {
                        dfs(neighbor, graph, visited);
                    }
                }
            }
            
            int main() {
                vector<int> graph[MAX_NODES];
                graph[0].push_back(1);
                graph[0].push_back(2);
                graph[1].push_back(3);
                graph[1].push_back(4);
                graph[2].push_back(5);
                graph[3].push_back(6);
            
                bool visited[MAX_NODES] = {false};
            
                cout << "Depth-First Search (DFS): ";
                dfs(0, graph, visited);
                cout << endl;
            
                return 0;
            }
            `
            }
        ]
    },
    {
        topicName: 'Heap',
        examples: [
          {
            title: 'Example 1: Binary max-heap ',
            description: 'Description of Example 1 for String topic.',
            code:`#include <iostream>
            using namespace std;
            
            const int MAX_HEAP_SIZE = 100;
            
            class MaxHeap {
            private:
                int heap[MAX_HEAP_SIZE];
                int size;
            
                int parent(int i) {
                    return (i - 1) / 2;
                }
            
                int leftChild(int i) {
                    return 2 * i + 1;
                }
            
                int rightChild(int i) {
                    return 2 * i + 2;
                }
            
                void heapifyUp(int i) {
                    while (i > 0 && heap[i] > heap[parent(i)]) {
                        swap(heap[i], heap[parent(i)]);
                        i = parent(i);
                    }
                }
            
                void heapifyDown(int i) {
                    int maxIndex = i;
                    int left = leftChild(i);
                    int right = rightChild(i);
            
                    if (left < size && heap[left] > heap[maxIndex]) {
                        maxIndex = left;
                    }
            
                    if (right < size && heap[right] > heap[maxIndex]) {
                        maxIndex = right;
                    }
            
                    if (i != maxIndex) {
                        swap(heap[i], heap[maxIndex]);
                        heapifyDown(maxIndex);
                    }
                }
            
            public:
                MaxHeap() {
                    size = 0;
                }
            
                void insert(int value) {
                    if (size >= MAX_HEAP_SIZE) {
                        return; // Heap is full
                    }
            
                    heap[size] = value;
                    size++;
                    heapifyUp(size - 1);
                }
            
                int getMax() {
                    return heap[0];
                }
            
                void extractMax() {
                    if (size <= 0) {
                        return; // Heap is empty
                    }
            
                    heap[0] = heap[size - 1];
                    size--;
                    heapifyDown(0);
                }
            };
            
            int main() {
                MaxHeap heap;
            
                heap.insert(10);
                heap.insert(15);
                heap.insert(5);
                heap.insert(20);
            
                cout << "Max Element: " << heap.getMax() << endl;
            
                heap.extractMax();
                cout << "Max Element after extraction: " << heap.getMax() << endl;
            
                return 0;
            }
            `
            }
        ]
    },
    // Add more DSA topics and examples
  ];
  
  export default examplesArray;
  