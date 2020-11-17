# 创建版本库



## 初始化仓库

```
$ git init
Initialized empty Git repository in /Users/michael/learngit/.git/
```

## 新增到本地仓库

```
git add readme.txt
```

## 提交到本地仓库

```
$ git commit -m "wrote a readme file"
```

# 查看提交状态

未add前

```
$ git status
Changes not staged for commit://未暂存已提交的更改
  (use "git add <file>..." to update what will be committed)//将要提交的文件
  (use "git restore <file>..." to discard changes in working directory)
        modified:   hh.txt

```

git add . 后

```
$ git status
No commits yet//还没有提交

Changes to be committed://需要提交的更改
  (use "git rm --cached <file>..." to unstage)
        new file:   hh.txt

```



# 版本回退



## 提交版本查看

```
$ git log
commit 44729a1d85afbc290db0ae4d33ce09957be83c86 (HEAD -> master)
Author: = <1803899789@qq.com>
Date:   Thu Nov 12 22:55:57 2020 +0800

    第一次提交

```

如果嫌输出信息太多，看得眼花缭乱的，可以试试加上`--pretty=oneline`参数：

```
$ git log --pretty=oneline
941ff8bdcd6348d485e25a8a0ffa179037cc7522 (HEAD -> master) 第三次提交
5f39c63bfb37fff60951da99a5b129819fa382df 第二次提交
44729a1d85afbc290db0ae4d33ce09957be83c86 第一次提交
```



## 回退到上个版本以及某个版本

首先，Git必须知道当前版本是哪个版本，在Git中，用`HEAD`表示当前版本，也就是最新的提交`941ff8bdcd6...`，上一个版本就是`HEAD^`，上上一个版本就是`HEAD^^`，当然往上100个版本写100个`^`比较容易数不过来，所以写成`HEAD~100`。

版本号没必要写全，前几位就可以了，Git会自动去找。当然也不能只写前一两位，因为Git可能会找到多个版本号，就无法确定是哪一个了。

```
$ git reset --hard HEAD^
$ git reset --hard HEAD~100
```



### 回退到指定版本

```
$ git reset --hard 1094a
HEAD is now at 83b0afe append GPL
```

### 找不到回退的版本

```
$ git reflog
5f39c63 (HEAD -> master) HEAD@{0}: reset: moving to HEAD^
941ff8b HEAD@{1}: commit: 第三次提交
5f39c63 (HEAD -> master) HEAD@{2}: commit: 第二次提交
44729a1 HEAD@{3}: commit (initial): 第一次提交

```

注：如果回退版本前没有进行commit 的话 那么后悔就来不及了

例如：

1. 你第一次git add a.txt  和commit -m ‘第一次提交’，a.txt 的内容为1

2. 你第二次git add a.txt  和commit -m ‘第二次提交  a.txt 的内容为12

3. 你第三次git add a.txt  和commit -m ‘第三次提交   a.txt 的内容为123

4. 第三次后你把 a.txt 的内容为1234 进行 git add a.txt

5. 这时你回退版本后就无法恢复到 a.txt 内容为1234的版本

   

# 工作区、暂存区、版本库、远程库

#### 工作区（Working Directory）

就是你在电脑里能看到的目录，比如我的`note`文件夹就是一个工作区：

工作区进行add后 =》 就添加到了暂存区commit后 =》就添加到了版本库push =》就添加到了远程库



# 查看工作区和版本库里面最新版本的区别

```
$ git diff HEAD -- readme.txt 
diff --git a/readme.txt b/readme.txt
index 76d770f..a9c5755 100644
--- a/readme.txt
+++ b/readme.txt
@@ -1,4 +1,4 @@
 Git is a distributed version control system.
 Git is free software distributed under the GPL.
 Git has a mutable index called stage.
-Git tracks changes.
+Git tracks changes of files.
```



# 撤销修改

```
git checkout -- readme.txt
```

`git checkout -- file`命令中的`--`很重要，没有`--`，就变成了“切换到另一个分支”的命令，我们在后面的分支管理中会再次遇到`git checkout`命令。



命令`git checkout -- readme.txt`意思就是，把`readme.txt`文件在工作区的修改全部撤销，这里有两种情况：

一种是`readme.txt`自修改后还没有被放到暂存区，现在，撤销修改就回到和版本库一模一样的状态；(还原到版本库)

一种是`readme.txt`已经添加add到暂存区后，又作了修改，现在，撤销修改就回到添加到暂存区后的状态。 (还原到暂存区)

总之，就是让这个文件回到最近一次`git commit`或`git add`时的状态。

现在，看看`readme.txt`的文件内容：

# 删除文件

```
$ rm test.txt //删除本地文件
$ git commit -m "remove test.txt" 把版本库的文件删除
$ git push origin main //把远版本库提交到远程库
```



# 远程仓库

## 添加到远程库

```
git remote add origin git@github.com:michaelliao/learngit.git
```



例：将本地关联到远程库

1. 在你的目录进入cmd 运行 git init 初始化

2. 关联到远程库 git remote add origin git@github.com:Jokesq/demo.git 

3. 拉去远程库代码 git pull

4. 查看所有分支 git branch -a 并切换远程库的分支 git checkout main

5. 将本地文件添加到远程分支 git add .   git commit -m '将本地添加到版本库'

6. 将本地同步到远程库 git push

   

## 从远程库中克隆

```
git clone git@github.com:Jokesq/demo.git
```



# 分支管理

## 创建与合并删除分支



### 创建分支

```
$ git checkout -b dev
Switched to a new branch 'dev'
```

`git checkout`命令加上`-b`参数表示创建并切换，相当于以下两条命令：

```
$ git branch dev
$ git checkout dev
Switched to branch 'dev'
```

### 查看分支

然后，用`git branch`命令查看当前分支：

```
$ git branch
* dev
  master
```

`git branch`命令会列出所有分支，当前分支前面会标一个`*`号。

然后，我们就可以在`dev`分支上正常提交，比如对`readme.txt`做个修改，加上一行：

```
Creating a new branch is quick.
```

然后提交：

```
$ git add readme.txt 
$ git commit -m "branch test"
[dev b17d20e] branch test
 1 file changed, 1 insertion(+)
```

现在，`dev`分支的工作完成，我们就可以切换回`master`分支：

### 切换分支

```
$ git checkout master
Switched to branch 'master'
```

 切换回`master`分支后，再查看一个`readme.txt`文件，刚才添加的内容不见了！因为那个提交是在`dev`分支上，而`master`分支此刻的提交点并没有变：

### 合并分支

现在，我们把`dev`分支的工作成果合并到`master`分支上：

```
$ git merge dev
Updating d46f35e..b17d20e
Fast-forward
 readme.txt | 1 +
 1 file changed, 1 insertion(+)
```

`git merge`命令用于合并指定分支到当前分支。合并后，再查看`readme.txt`的内容，就可以看到，和`dev`分支的最新提交是完全一样的。

注意到上面的`Fast-forward`信息，Git告诉我们，这次合并是“快进模式”，也就是直接把`master`指向`dev`的当前提交，所以合并速度非常快。

当然，也不是每次合并都能`Fast-forward`，我们后面会讲其他方式的合并。

合并完成后，就可以放心地删除`dev`分支了：

### 删除分支

```
$ git branch -d dev
Deleted branch dev (was b17d20e).
```

删除后，查看`branch`，就只剩下`master`分支了：

```
$ git branch
* master
```

因为创建、合并和删除分支非常快，所以Git鼓励你使用分支完成某个任务，合并后再删掉分支，这和直接在`master`分支上工作效果是一样的，但过程更安全。



## 解决冲突

