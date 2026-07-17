class Solution {
public:
    TreeNode* upsideDownBinaryTree(TreeNode* root) {
        // Base case: if root is null or it has no left child
        if (!root || !root->left) {
            return root;
        }
        
        // Recursively call to find the new root
        TreeNode* newRoot = upsideDownBinaryTree(root->left);
        
        // Rearrange the pointers
        root->left->left = root->right;   // Original right child -> new left child
        root->left->right = root;         // Original root -> new right child
        
        // Clear original pointers to prevent cycles
        root->left = nullptr;
        root->right = nullptr;
        
        return newRoot;
    }
};
