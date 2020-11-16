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



# 删除文件

```
$ rm test.txt //删除本地文件
$ git commit -m "remove test.txt" 把版本库的文件删除
$ git push origin main //把远版本库提交到远程库
```



